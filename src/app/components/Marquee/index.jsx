'use client';
import styles from './style.module.css';

const SKILLS = [
  'Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'GLSL',
  'React', 'Next.js', 'FastAPI', 'Node.js', 'Express.js', 'Three.js',
  'GSAP', 'Framer Motion', 'PyTorch', 'TensorFlow', 'Hugging Face Transformers',
  'LangChain', 'LangGraph', 'AWS', 'Google Cloud Platform', 'Docker',
  'PostgreSQL', 'Supabase', 'CI/CD',
  'OpenAI API', 'RAG Pipelines', 'Vector Databases', 'OpenCV', 'scikit-learn',
  'Agentic AI', 'REST APIs', 'MongoDB', 'WebSockets',
  'Responsive Web Development', 'API Development',
  'Git'
];

const SEGMENTS = SKILLS.flatMap((skill, i) => [
  { text: skill, dim: false },
  { text: i < SKILLS.length - 1 ? ' — ' : ' · ', dim: true },
]);

function Track() {
  return (
    <>
      {SEGMENTS.map((seg, i) => (
        <span key={i} className={seg.dim ? styles.sep : styles.content}>
          {seg.text}
        </span>
      ))}
    </>
  );
}

export default function Marquee({ reverse = false }) {
  return (
    <div className={`${styles.marquee} ${reverse ? styles.reverse : ''}`} aria-hidden>
      <div className={styles.track}>
        <Track />
        <Track />
      </div>
    </div>
  );
}
