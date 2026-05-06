import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import projects from '../../data/projects';
import Navbar from '../../components/Navbar';
import styles from './style.module.css';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const project = projects[idx];
  const prev = projects[idx - 1] ?? null;
  const next = projects[idx + 1] ?? null;

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>

        {/* ── Title block ────────────────────────────── */}
        <section className={styles.titleSection}>
          <p className={styles.index}>{project.index} / {String(projects.length).padStart(2, '0')}</p>
          <h1 className={styles.title}>{project.title}</h1>
        </section>

        <hr className={styles.rule} />

        {/* ── Metadata ──────────────────────────────── */}
        <section className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Year</span>
            <span className={styles.metaValue}>{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Category</span>
            <span className={styles.metaValue}>{project.category}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{project.role}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Tools</span>
            <span className={styles.metaValue}>{project.tools}</span>
          </div>
        </section>

        <hr className={styles.rule} />

        {/* ── Hero image ────────────────────────────── */}
        {project.image && (
          <section className={styles.hero}>
            <div className={styles.heroInner}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </section>
        )}

        {/* ── Body text ─────────────────────────────── */}
        <section className={styles.body}>
          <p className={styles.lead}>{project.description}</p>

          {project.video && (
            <div className={styles.videoWrap}>
              <iframe
                src={project.video}
                className={styles.video}
                style={{ border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            </div>
          )}

          {project.body && project.body.split('\n\n').map((para, i) => (
            <p key={i} className={styles.bodyText}>{para}</p>
          ))}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              {project.linkLabel} ↗
            </a>
          )}
        </section>

        {/* ── Project navigation ────────────────────── */}
        <hr className={styles.rule} />

        <nav className={styles.projectNav}>
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className={styles.navLink}>
              <span className={styles.navLabel}>← Previous</span>
              <span className={styles.navTitle}>{prev.title}</span>
            </Link>
          ) : <span />}

          {next ? (
            <Link href={`/projects/${next.slug}`} className={`${styles.navLink} ${styles.navRight}`}>
              <span className={styles.navLabel}>Next →</span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : <span />}
        </nav>

      </main>
    </div>
  );
}
