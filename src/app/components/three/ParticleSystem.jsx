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
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';





ScrollTrigger.getAll().forEach(trigger => trigger.kill());



const ParticleSystem = ({ onLoaded }) => {

    const canvasRef = useRef(null);
    const isVisibleRef = useRef(true); 



    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
        },
        {
      root: null,
      threshold: 0.0,
        }
    );

    if (canvasRef.current) {
        observer.observe(canvasRef.current);
    }

    return () => {
        observer.disconnect();
    };
    }, []);





    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.getContext) return;


        let animationFrameId;
        let scene, camera, renderer, controls;
        let particles = null;
        let gpgpu = null; 
        let baseParticlesTexture = null; 
        let baseGeometry = null; 



            /**
             * Base
             */
            //Debug
            // const gui = new GUI({ width: 340 })
            // const debugObject = {}

            scene = new THREE.Scene();

            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRatio: Math.min(window.devicePixelRatio, 2)
            }

            window.addEventListener('resize', () =>
                {
                    // Update sizes
                    sizes.width = window.innerWidth
                    sizes.height = window.innerHeight
                    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)
                
                    // Materials
                    particles.material.uniforms.uResolution.value.set(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)
                
                    // Update camera
                    camera.aspect = sizes.width / sizes.height
                    camera.updateProjectionMatrix()
                
                    // Update renderer
                    renderer.setSize(sizes.width, sizes.height)
                    renderer.setPixelRatio(sizes.pixelRatio)
                })


            /**
            * Mouse
            */
            const mouse = new THREE.Vector2()



            const raycaster = new THREE.Raycaster();
            const mouseNDC = new THREE.Vector2(); // normalized device coords (-1 to 1)
            const intersectionPoint = new THREE.Vector3();

            window.addEventListener('mousemove', (event) => {
            mouseNDC.x = (event.clientX / sizes.width) * 2 - 1;
            mouseNDC.y = -(event.clientY / sizes.height) * 2 + 1;
            });



            


              

            




            // Loaders
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('/draco/')

            const gltfLoader = new GLTFLoader()
            gltfLoader.setDRACOLoader(dracoLoader)

            // Base camera
            camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)

            let dirc = 1;
            let AMT = 0.5;

            const isMobile = window.matchMedia('(max-width: 768px)').matches;

            if (isMobile) {
            camera.position.set(-10, 0, -5); 
            } else {
            camera.position.set(-5, 0, 0); 
            }






            // camera.position.set(-5, 0, 0);  // camera above origin
            camera.lookAt(0, 0, 0);         // looks down at (0, 0, 0)
            scene.add(camera)

            // const stats = new Stats()
            // stats.showPanel(0) 
            // document.body.appendChild(stats.dom)

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
            

            const rotateMode = Math.floor(Math.random() * 2) + 1;


            if(rotateMode == 1)
            {
                dirc = -1;
                AMT = 0.2;
            }




            const loadModel = async () => {
                const  gltf  = await gltfLoader.loadAsync('/models/Whale3.glb');



                 baseGeometry = {}
                 baseGeometry.instance = baseGeometry.instance = gltf.scene.children[0].geometry

                 baseGeometry.count = baseGeometry.instance.attributes.position.count




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
                gpgpu.particlesVariable.material.uniforms.uMouse = new THREE.Uniform(new THREE.Vector2(0, 0))
                gpgpu.particlesVariable.material.uniforms.dirc = new THREE.Uniform(0)
                gpgpu.particlesVariable.material.uniforms.AMT = new THREE.Uniform(0)




                gpgpu.particlesVariable.material.uniforms.AMT.value = AMT;
                gpgpu.particlesVariable.material.uniforms.dirc.value = dirc;







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


                // let debugSphere = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
                // scene.add(debugSphere)
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
                        uSize: new THREE.Uniform(0.02),
                        uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)),
                        uParticlesTexture: new THREE.Uniform()
                }
                 })

                // Points
                particles.points = new THREE.Points(particles.geometry, particles.material)
                // particles.points.position.y = 0;
                // particles.points.position.x = 0;

                



                let planeAmount = -3;

                const isMobile = window.matchMedia('(max-width: 768px)').matches;

                if (isMobile) {

                    particles.points.rotation.y = 180 * Math.PI / 180;
                    
                } 
                else {
                    if(rotateMode == 1)
                        {
                            particles.points.rotation.y = 180 * Math.PI / 180;
                            planeAmount = 3;
                            
                        }
                }

     
                const xPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), planeAmount); // plane at x = 0









                scene.add(particles.points)


                      // GUI after particles exist
                // gui.addColor(debugObject, 'clearColor').onChange(() => {
                // renderer.setClearColor(debugObject.clearColor);
                // });
                // gui.add(particles.material.uniforms.uSize, 'value').min(0).max(1).step(0.001).name('uSize');

               // Animation
                const clock = new THREE.Clock();
                let previousTime = 0;

                console.log(renderer.info)

                const tick = () => {
                    animationFrameId = requestAnimationFrame(tick);

                    if (!isVisibleRef.current) return;
                    // stats.begin()
                    const elapsedTime = clock.getElapsedTime();
                    const deltaTime = elapsedTime - previousTime;
                    previousTime = elapsedTime;

                    // controls.update();
                    gpgpu.particlesVariable.material.uniforms.uTime.value = elapsedTime
                    gpgpu.particlesVariable.material.uniforms.uDeltaTime.value = deltaTime
                    gpgpu.particlesVariable.material.uniforms.uMouse.value.set(mouse.x, mouse.y);


                                        // Cast ray from camera
                    // Cast ray from camera through mouse position
                       raycaster.setFromCamera(mouseNDC, camera);

                    // Get intersection with view-aligned plane
                       raycaster.ray.intersectPlane(xPlane, intersectionPoint);


                        // Pass the YZ position to shader
                       gpgpu.particlesVariable.material.uniforms.uMouse.value.set(
                           intersectionPoint.y,
                           intersectionPoint.z
                       );

                    // debugSphere.position.copy(intersectionPoint);
                    // console.log(debugSphere.position)

                    gpgpu.computation.compute();

                    particles.material.uniforms.uParticlesTexture.value = gpgpu.computation.getCurrentRenderTarget(gpgpu.particlesVariable).texture;
                    // controls.update();
                    renderer.render(scene, camera);
                    // effectComposer.render()
                    
                    // stats.end()


                };

                    tick();

                        // Scroll animation with GSAP
                    gsap.to(camera.position, {
                    z: -3,
                    scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top",
                    end: "bottom",
                    scrub: 1,
                    },
                    });

                if (onLoaded) onLoaded()


            }




        

    loadModel();    
    
    

    return () => {
        // Cancel animation
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    
        // window.removeEventListener('resize', handleResize);
    
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
    
        // if (stats && stats.dom && stats.dom.parentNode) {
        //     stats.dom.parentNode.removeChild(stats.dom);
        // }
    
        gsap.killTweensOf(camera.position);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
        // controls.dispose();
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


export default ParticleSystem;
