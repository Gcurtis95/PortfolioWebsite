const projects = [
  {
    slug: 'agentic-content-engine',
    index: '01',
    title: 'Agentic Content Engine Prototype',
    year: '2026',
    category: 'AI · Automation',
    role: 'Creative AI Technologist',
    tools: 'Next.js,  React, Tailwind, WebGL, n8n, GPT-4o, Replicate (Flux Schnell), NewsAPI, Google Sheets API, Railway',
    description:
      "An end-to-end agentic content pipeline built in n8n with a Next.js frontend. The system ingests a campaign brief and autonomously generates a complete multi-platform creative package which combines live trend data, LLM reasoning, and generative AI into a single orchestrated workflow.",
    body:
      `The pipeline opens with a Brand Intelligence Agent powered by Claude opus, which uses web search to generate a comprehensive brand config — covering brand voice, content pillars, competitor landscape, banned themes, visual style, and a full trend analysis including emerging themes, cultural moments, audience sentiment, and content opportunities. This config becomes the shared intelligence layer that shapes every downstream decision.

Creative Generation Agent produces platform-specific copy for Instagram, Twitter/X, and email, alongside an image generation prompt and video concept, all strictly informed by the brand intelligence layer.

A Creative Director Agent then critiques the first-pass output against the brand brief, rewrites each element to a higher standard, and produces an improved image prompt. This feeds into Flux 2 Pro via the Replicate API, with an asynchronous polling loop handling inference latency. The generated image is then passed back to Claude's vision capability for art direction critique and prompt refinement.

All outputs brand config, trend analysis, copy variants, quality scores, image URL, and video concept are logged to Google Sheets as a structured campaign record and returned to a clean frontend interface in a single response.

Architecture highlights: Three-agent Claude pipeline with distinct roles: Brand Strategist, Creative Writer, Creative Director · Async image generation with conditional polling loop · Brand safety guardrails derived dynamically from brand config · Structured JSON output parsing throughout with graceful error fallbacks · Dual-endpoint architecture separating fast brand intelligence response from full campaign delivery · Vision-enabled image critique closing the generative loop`,
    images: [
      '/images/n8n Worksflow.png',
      '/images/n8nFrontend.png',
      '/images/n8nResults1.png',
      '/images/n8nResults2.png',
    ],
    image: '/images/n8nFrontend.png',
    video: null,
    link: null,
    linkLabel: null,
  },
  {
    slug: 'climate-projection-app',
    index: '01',
    title: 'Global Climate Projection App',
    year: '2026',
    category: 'Web Application · AI',
    role: 'Full-Stack Creative AI Technologist',
    tools: 'Next.js, Three.js, TypeScript, Python, FastAPI, LangChain, OpenAI API, Google Earth Engine, ChromaDB, GCP, GLSL',
    description:
      'Climate Projection is a full-stack AI application that generates location-specific climate change forecasts for any point on Earth. A user drops a pin on a 3D interactive globe, picks a season and a target year up to 2100, and the system returns a quantified scientific analysis (projected changes in temperature, precipitation, humidity, and wind speed) using real NASA satellite data, peer-reviewed research papers, and live web searches.',
    body:
      `The landing page is built around a 3D globe the user can spin and drop a marker on. Behind it sits a GPU-accelerated particle system that samples colours from a real NASA temperature map image, placing thousands of tiny particles that glow and bloom. A second animation layer draws minimalist geometric boxes that drift slowly around the screen with connecting lines between them, creating a data-tracking aesthetic inspired by the artist Ryoji Ikeda.
Before any analysis runs, the coordinates are pre-validated: the system checks whether the pin landed on water (ocean coordinates are rejected), and reverse-geocodes the point to a human-readable location name. Both checks run in parallel.
Once a valid land location is submitted, the backend runs a four-stage pipeline and streams each result back as it completes, so the user sees progress as the process can take up to a minute to compute..

Not all climate models are equally accurate in all regions. The system selects the most geographically appropriate CMIP6 climate model for the chosen location from the 25 available in NASA's dataset. CMIP6 is the international ensemble of climate models that underpins the IPCC's assessments.
The backend queries the NASA NEX-GDDP-CMIP6 dataset via Google Earth Engine, a planetary-scale geospatial computing platform. It fetches two data windows:
A projected window: a 30-year range centred on the target year, filtered to the chosen season and the SSP2-4.5 emissions scenario
A 1985–2015 historical baseline for comparison.
For each window, it computes the mean and standard deviation across all six climate variables: near-surface relative humidity, wind speed, mean temperature, minimum temperature, maximum temperature, and precipitation rate. These are extracted at a single point at 25 km resolution. The difference between projected and baseline gives the climate signal, and the standard deviation tells the system how confident to be in that signal relative to natural variability.

Two AI research tasks run simultaneously:

Retrieval-Augmented Generation: A vector database holds chunks from 70+ open-access CMIP6 model evaluation papers. Gemini first generates a precise semantic search query targeting the specific model and region, then retrieves the most relevant paper excerpts. These surface known model biases,  for example, whether a particular CMIP6 model is known to over-predict rainfall in a specific region, so the final analysis can qualify its claims accordingly.
Web Search: using Google Gemini Search grounding, retrieves live scientific literature and regional climate impact assessments relevant to the computed anomaly signals. The search is seeded with the actual delta values, so it stays grounded in the specific numbers rather than returning generic climate overviews.
Once both research tasks are complete, GPT-4.1 summarises everything into a structured output. The model is instructed to quantify every claim using the actual delta values, distinguish statistically robust signals from uncertain ones (where natural variability is larger than the projected change), and incorporate model-specific bias caveats from the paper excerpts. The output includes a narrative analysis, key takeaways, sector-specific impact bullets, a data table of all climate variables, and cited sources.
`,
    images: [
      '/images/ClimateHomepage.png',
      '/images/ClimateLoading.png',
      '/images/ClimateResults.png',
    ],
    image: '/images/ClimateHomepage.png',
    video: null,
    link: null,
    linkLabel: null,
  },
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

      This work contributed to a live touring installation, demonstrating how generative models can be applied to embodied AI, digital performance, and interactive storytelling`,
      
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
    title: 'Ancestral (R)evocations - Tate Modern',
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
