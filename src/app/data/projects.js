const projects = [
  {
    slug: 'ae-labs-lilith-ai',
    index: '01',
    title: 'A + E labs - Lilith AI',
    year: '2026',
    category: 'Installation · XR-AI',
    role: 'Machine Learning Engineer',
    tools: 'PyTorch, Python, Unreal Engine',
    description:
      'The LILITH.AEON project by AΦE (Aoi Nakamura & Esteban Lecoq dance company) is an experimental XR performance combining AI, motion capture, and immersive visuals to explore themes of transhumanism, grief, and digital reincarnation.',
    body:
      `Worked on LILITH.AEON, an experimental XR installation combining machine learning, motion capture, and real-time rendering to create an interactive AI-driven performer.

      Designed and implemented a decoder-only Transformer model to generate long-form motion sequences from captured choreography data, enabling coherent and expressive movement 
      synthesis. The system was integrated into a real-time pipeline using Unreal Engine, where generated motion drives a digital character inside a 360° LED volume.

      This work contributed to a live touring installation, demonstrating how generative models can be applied to embodied AI, digital performance, and interactive storytelling.`,
      
    image: '/images/Lilith_AI.jpg',
    video: null,
    link: 'https://www.instagram.com/lilith.aeon/',
    linkLabel: 'Lilith AEON',
    link: 'https://www.scan.co.uk/case-studies/ae-lilith-aeon',
    linkLabel: 'Lilith.AEON',
  },
  {
    slug: 'cvpr-2025-installation',
    index: '02',
    title: 'Installation at CVPR 2025 AI Art Gallery',
    year: '2025',
    category: 'Installation · AI',
    role: 'Fullstack AI',
    tools: 'Python, PyTorch, FastAPI, Websockets, sklearn, Javascript, Runpod (GPU), Docker, Html, and CSS',
    description:
      "Is an interactive digital installation that uses a touch interface to manipulate the inner workings of an AI system. As visitors engage with the interface, their interaction disrupts and reshapes the model’s internal processes, subverting its typical behavior and revealing surprising visual outcomes.",
    body:
      `The project builds on network bending techniques, originally developed by Terence Broad to manipulate the computational graph of GANs. As part of my dissertation at UAL’s Creative Computing Institute, I adapted these techniques to a diffusion model, enabling real-time interaction and control.

The interface includes an XY pad and an interactive U-Net map, making these complex techniques intuitive and tangible for users.

To ensure portability, the installation runs on a real-time cloud GPU backend, using FastAPI, WebSockets, and OSC to dynamically drive AI image generation.`,
    image: '/images/CVPR3.jpg',
    // video: 'https://player.vimeo.com/video/1047257778?badge=0',
    link: null,
    linkLabel: null,
  },
  {
    slug: 'ai-plugin',
    index: '03',
    title: 'Real-time Manipulation Tool for Stable Diffusion',
    year: '2025',
    category: 'AI Creative Tech',
    role: 'AI Developer',
    tools: 'Pytorch, Python, TouchDesigner, OSC',
    description:
      'Developed An Expressive Tool for Real-Time Manipulation of Diffusion Models through Network Bending.',
    body: `This tool introduces a novel approach to real-time manipulation of diffusion models by inte
gratng network bending techniques into the 2D Conditional U-Net model within the StreamDiffusion pipeline. 
Leveraging the flexibility of TouchDesigner, I developed an interactive tool designed for seamless integration 
into artistic workflows, enabling users to manipulate generative outputs
dynamically and expressively. 

Unlike traditional text-to-image models, my tool facilitates open
ended exploration of the latent space, producing a diverse range of outputs that actively diverge
from the training data. Through artistic experimentation, I demonstrate the tool’s ability to generate 
outputs ranging from subtle enhancements to abstract transformations, unlocking new creative
possibilities. 

This research provides a foundation for advancing real-time, artist-driven interaction
with generative AI models, bridging the gap between technical innovation and creative expression.`,
    image: '/images/Layer1.png',
    video: null,
    link: null,
    linkLabel: null,
  },
    {
    slug: 'ancestral-(r)evocations-tate-modern',
    index: '01',
    title: 'Ancestral (R)evocations',
    year: '2024',
    category: 'Installation · AI',
    role: 'Creative Developer',
    tools: 'RAVE, Pure Data, PyTorch, Python',
    description:
      'Data sonification through a `DIY` diagnostic tool consisting of fragmented instruments/mechanised parts, and the feedback of live machine learning museum soundscapes. Working closely with artist Erika Tan, I constructed an archival sonification schema. The installation was presented in the Blavatnik Tanks, Tate Modern.',
    body: `Ancestral (r)Evocations gathers and scrapes collections data referencing ‘Southeast Asia’ from British institutions (Tate and Wellcome Collection) to bring together forms of computational processes and human–computer collaboration where data, digitised and physical materials, speculation and generative processes create a series of loosely subjective and firmly indexical sound and image events. Probing the depths of museal collections, processes and their current states of ‘health and well-being’.

I was commissioned to develop the ‘semantic sound’ layer - collections data is translated into numerical vectors and ‘labelled’ (a machine learning process) based on the existence (or lack of) racialised collections data statements, separating data into binaries which feed new systems of sonification and machine learning. Sounds collected in the Tate Modern repository were used to train a Realtime Audio Variational autoEncoder (RAVE) - a neural network model that learns to re-synthesise the training corpus, artificially, in real-time.

The model learns a compressed, low-dimensional representation of the high-dimensional audio input. This compressed “manifold” can be explored through exploration of the “latent space” - movement within this space will modify the audio output, corresponding to different learned representations of the archival training data. This space is explored, and semantically meaningful movements can be automated using the translated numerical vectors. This creates a generative soundscape, constantly changing, yet supporting the conceptual framework of the artwork. These ‘live’ components of sound feedback machine learnt and generated sounds of ‘Tate Modern’ and a more musical track of reconfigured recordings of the instruments.

The commissioned work has developed as a practice-led research project supported by the Decolonising Arts Institute, Transforming Collections Artist Research Residencies.`,
    image: '/images/Erika_Tan_Ancestral.jpg',
    video: null,
    link: 'https://www.tate.org.uk/research/tate-papers/36/interview-erika-tan',
    linkLabel: 'View at Tate',
  },
  // {
  //   slug: 'immersive-audiovisual',
  //   index: '04',
  //   title: 'Immersive Audio Visual',
  //   year: '2025',
  //   category: 'AV · Live Performance',
  //   role: 'Creative Developer',
  //   tools: 'TouchDesigner, Ableton Live',
  //   description:
  //     'A live audiovisual performance combining reactive generative visuals with spatial audio — built for full-dome and large-format projection environments.',
  //   body: null,
  //   image: '/images/visuals.jpg',
  //   video: null,
  //   link: null,
  //   linkLabel: null,
  // },
];

export default projects;
