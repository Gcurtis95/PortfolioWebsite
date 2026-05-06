'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './style.module.css';

const projects = [
    {
    id: '01',
    title: 'A + E labs - Lilith AI',
    category: 'Installation · AI',
    year: '2026',
    href: '/projects/ae-labs-lilith-ai',
    image: '/images/Lilith_AI.jpg',
  },
    {
    id: '02',
    title: 'Installation at CVPR 2025 AI Art Gallery',
    category: 'Installation · AI',
    year: '2025',
    href: '/projects/cvpr-2025-installation',
    image: '/images/CVPR2025.jpg',
  },
    {
    id: '03',
    title: 'Real-time Manipulation Tool for Stable Diffusion',
    category: 'AI Creative Tech',
    year: '2025',
    href: '/projects/ai-plugin',
    image: '/images/Layer1.png', // add image path
  },
  {
    id: '04',
    title: 'Ancestral (R)evocations',
    category: 'Installation · AI',
    year: '2024',
    href: '/projects/ancestral-(r)evocations-tate-modern',
    image: '/images/Erika_Tan_Ancestral.jpg',
  },
  // {
  //   id: '05',
  //   title: 'Immersive Audio Visual',
  //   category: 'AV · Live Performance',
  //   year: '2024',
  //   href: '/projects/immersive-audiovisual',
  //   image: '/images/visuals.jpg',
  // },

];

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>SELECTED WORK</span>
        <span className={styles.count}>({String(projects.length).padStart(2, '0')})</span>
      </div>

      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.item}>
            <Link href={project.href} className={styles.link}>
              <span className={styles.index}>{project.id}</span>
              <span className={styles.title}>{project.title}</span>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.year}</span>
              <span className={styles.arrow}><FiArrowUpRight /></span>

              <div className={styles.thumb}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="260px"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className={styles.thumbPlaceholder} />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
