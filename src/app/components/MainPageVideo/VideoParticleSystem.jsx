'use client';


import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import FragmentShader from "./fragment.glsl"
import VertexShader from "./vertex.glsl";
import GUI from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js'
import gpgpuParticlesShader from './particles.glsl'
import gsap from 'gsap';
import Stats from 'stats.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger';




ScrollTrigger.getAll().forEach(trigger => trigger.kill());



const VideoParticleSystem = ({  }) => {

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.getContext) return;


        let animationFrameId;
        let scene, camera, renderer, controls;
        let particles = null;
        let gpgpu = null; // <<== define particles safely here
        let baseParticlesTexture = null; // <<== define particles safely here
        // let baseGeometry = null; // <<== define particles safely here





            scene = new THREE.Scene();

            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRatio: Math.min(window.devicePixelRatio, 2)
            }

  

            const handleResize = () => {
                sizes.width = window.innerWidth;
                sizes.height = window.innerHeight;
                sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);
              
                if (particles?.material?.uniforms?.uResolution) {
                  particles.material.uniforms.uResolution.value.set(
                    sizes.width * sizes.pixelRatio,
                    sizes.height * sizes.pixelRatio
                  );
                }
              
                camera.aspect = sizes.width / sizes.height;
                camera.updateProjectionMatrix();
                renderer.setSize(sizes.width, sizes.height);
                renderer.setPixelRatio(sizes.pixelRatio);
              };
              
              window.addEventListener('resize', handleResize);
              

            




            // Loaders
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('/draco/')

            const gltfLoader = new GLTFLoader()
            gltfLoader.setDRACOLoader(dracoLoader)

            // Base camera
            camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
            camera.position.set(0, -3, 10);  // camera above origin
            camera.lookAt(0, 0, 0);         // looks down at (0, 0, 0)
            scene.add(camera)

            const stats = new Stats()
            stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
            document.body.appendChild(stats.dom)

            // const helper = new THREE.AxesHelper(5);
            // scene.add(helper);








            /**
             * Renderer
             */
            renderer = new THREE.WebGLRenderer({
                canvas ,
                antialias: true,
            })
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(sizes.pixelRatio)
            
            // debugObject.clearColor = '#000000'
            // renderer.setClearColor(debugObject.clearColor)

            // Controls
            controls = new OrbitControls(camera, renderer.domElement)
            controls.enableDamping = true
            controls.enableZoom = false




            const video = document.createElement('video');
            video.src = '/videos/websiteaudiovisual.mp4';
            video.crossOrigin = 'anonymous';
            video.loop = true;
            video.muted = true;
            video.play();

            const videoTexture = new THREE.VideoTexture(video);
            videoTexture.minFilter = THREE.LinearFilter;
            videoTexture.magFilter = THREE.LinearFilter;
            videoTexture.format = THREE.RGBFormat;

// Generate a simple plane of points
            const width = 1280;
            const height = 720;
            const count = width * height;

            const baseGeometry = {};
            baseGeometry.instance = new THREE.PlaneGeometry(2, 2, width - 1, height - 1);
            baseGeometry.count = baseGeometry.instance.attributes.position.count;


            // const loadModel = async () => {
                // const  gltf  = await gltfLoader.loadAsync('/models/KnackeredTree3.glb');







                //  baseGeometry.instance = baseGeometry.instance = geometry
                //  baseGeometry.count = baseGeometry.instance.attributes.position.count




                //////////////////////////GPU Compute  //////////////////////
            
                 gpgpu = {}
                 gpgpu.size = Math.ceil(Math.sqrt(baseGeometry.count))
                 gpgpu.computation = new GPUComputationRenderer(gpgpu.size, gpgpu.size, renderer)

                baseParticlesTexture = gpgpu.computation.createTexture()

                 for(let i = 0; i < baseGeometry.count; i++)
                     {
                         const i3 = i * 3
                         const i4 = i * 4

                         // Position based on geometry
                         baseParticlesTexture.image.data[i4 + 0] = baseGeometry.instance.attributes.position.array[i3 + 0]
                         baseParticlesTexture.image.data[i4 + 1] = baseGeometry.instance.attributes.position.array[i3 + 1]
                         baseParticlesTexture.image.data[i4 + 2] = baseGeometry.instance.attributes.position.array[i3 + 2]
                         baseParticlesTexture.image.data[i4 + 3] = Math.random()
                     }

    

            
                 // Particles variable
                 gpgpu.particlesVariable = gpgpu.computation.addVariable('uParticles', gpgpuParticlesShader, baseParticlesTexture)
                 gpgpu.computation.setVariableDependencies(gpgpu.particlesVariable, [ gpgpu.particlesVariable ])

                 // Uniforms
                gpgpu.particlesVariable.material.uniforms.uTime = new THREE.Uniform(0)
                gpgpu.particlesVariable.material.uniforms.uBase = new THREE.Uniform(baseParticlesTexture)
                gpgpu.particlesVariable.material.uniforms.uDeltaTime = new THREE.Uniform(0)


                // Init
                 gpgpu.computation.init()

                 /**
                  * Particles
                  */
                 particles = {}

                 // Geometry

                 const particlesUvArray = new Float32Array(baseGeometry.count * 2)
                 const sizesArray = new Float32Array(baseGeometry.count)

                 for(let y = 0; y < gpgpu.size; y++)
                     {
                         for(let x = 0; x < gpgpu.size; x++)
                         {
                             const i = (y * gpgpu.size + x)
                             const i2 = i * 2
                     
                        // Particles UV
                             const uvX = (x + 0.5) / gpgpu.size
                             const uvY = (y + 0.5) / gpgpu.size
                
                             particlesUvArray[i2 + 0] = uvX;
                             particlesUvArray[i2 + 1] = uvY;

                             // Sizes
                             sizesArray[i] = Math.random()
                         }
                     }



//////////////////////////////////////////////////////////////////////////////////////////////////////////




                 particles.geometry = new THREE.BufferGeometry()
                 particles.geometry.setDrawRange(0, baseGeometry.count)
                 particles.geometry.setAttribute('aParticlesUv', new THREE.BufferAttribute(particlesUvArray, 2))
                 particles.geometry.setAttribute('aColor', baseGeometry.instance.attributes.color)
                 particles.geometry.setAttribute('aSize', new THREE.BufferAttribute(sizesArray, 1))

                 // Material
                 particles.material = new THREE.ShaderMaterial({
                     vertexShader: VertexShader,
                     fragmentShader: FragmentShader,
                     uniforms:
                     {
                         uSize: new THREE.Uniform(0.03),
                         uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)),
                         uParticlesTexture: new THREE.Uniform(),
                         uVideoTexture: new THREE.Uniform(videoTexture),
                }
                 })

                // Points
                particles.points = new THREE.Points(particles.geometry, particles.material)
                particles.points.position.y = 1;
                particles.points.position.x = 0.4;
                particles.points.rotation.y = Math.PI / 2;
                scene.add(particles.points)


                      // GUI after particles exist
                // gui.addColor(debugObject, 'clearColor').onChange(() => {
                // renderer.setClearColor(debugObject.clearColor);
                // });
                // gui.add(particles.material.uniforms.uSize, 'value').min(0).max(1).step(0.001).name('uSize');

               // Animation
                const clock = new THREE.Clock();
                let previousTime = 0;


                const tick = () => {
                    stats.begin()
                    const elapsedTime = clock.getElapsedTime();
                    const deltaTime = elapsedTime - previousTime;
                    previousTime = elapsedTime;

                    controls.update();
                    gpgpu.particlesVariable.material.uniforms.uTime.value = elapsedTime
                    gpgpu.particlesVariable.material.uniforms.uDeltaTime.value = deltaTime
                    gpgpu.computation.compute();

                    particles.material.uniforms.uParticlesTexture.value = gpgpu.computation.getCurrentRenderTarget(gpgpu.particlesVariable).texture;

                    renderer.render(scene, camera);
                    animationFrameId = requestAnimationFrame(tick);
                    stats.end()


                };

                    tick();

                        // Scroll animation with GSAP
                    gsap.to(camera.position, {
                    z: -4,
                    scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top",
                    end: "bottom",
                    scrub: 1,
                    },
                    });

                // if (onLoaded) onLoaded()


    //         }




        

    // loadModel();    
    
    

    return () => {
        // Cancel animation
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    
        window.removeEventListener('resize', handleResize);
    
        if (particles) {
            if (particles.points) {
                if (particles.points.geometry) {
                    // Dispose geometry and its attributes safely
                    particles.points.geometry.dispose();
                    for (const key in particles.points.geometry.attributes) {
                        particles.points.geometry.attributes[key]?.dispose?.();
                    }
                }
                if (particles.points.material) {
                    particles.points.material.dispose();
                }
                scene.remove(particles.points);
            }
        }
    
        if (baseParticlesTexture) {
            baseParticlesTexture.dispose();
            baseParticlesTexture = null;
        }
    
        if (baseGeometry && baseGeometry.instance) {
            baseGeometry.instance.dispose();
            baseGeometry = null;
        }
    
        if (gpgpu) {
            gpgpu.computation.dispose();
            gpgpu.particlesVariable.material.dispose();
            gpgpu.particlesVariable.material.uniforms.uBase.value.dispose();
            gpgpu = null;
        }
    
        if (stats && stats.dom && stats.dom.parentNode) {
            stats.dom.parentNode.removeChild(stats.dom);
        }
    
        gsap.killTweensOf(camera.position);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
        controls.dispose();
        renderer.dispose();
        scene.clear();
        renderer.info.reset();
    
        scene = null;
        camera = null;
        renderer = null;
        controls = null;
      };
    

    
            
        
    }, []);

    return (
        <canvas ref={canvasRef} className="webgl" />
    );

};


export default VideoParticleSystem;
