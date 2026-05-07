import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Lumina Dashboard',
    category: 'Web App',
    year: '2024',
    desc: 'A real-time analytics platform with custom data visualization components and streaming updates via WebSockets.',
    stack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    color: '#c8a96e',
  },
  {
    id: 2,
    title: 'Folio CMS',
    category: 'Full Stack',
    year: '2024',
    desc: 'Headless content management system with a visual editor, media pipeline, and multi-tenant architecture.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'S3'],
    color: '#7c6fcd',
  },
  {
    id: 3,
    title: 'Trace Mobile',
    category: 'Mobile',
    year: '2023',
    desc: 'Habit tracking app with streak analytics, smart reminders, and a beautifully minimal interface.',
    stack: ['React Native', 'Expo', 'SQLite', 'Reanimated'],
    color: '#6eb5c8',
  },
  {
    id: 4,
    title: 'Craft UI Kit',
    category: 'Design System',
    year: '2023',
    desc: 'Open-source component library with 80+ primitives, dark/light modes, and full accessibility compliance.',
    stack: ['React', 'Storybook', 'Radix UI', 'CSS Modules'],
    color: '#c86e99',
  },
  {
    id: 5,
    title: 'Meridian API',
    category: 'Backend',
    year: '2022',
    desc: 'High-throughput REST and GraphQL API serving 2M+ requests daily with Redis caching and rate limiting.',
    stack: ['Node.js', 'GraphQL', 'Redis', 'AWS'],
    color: '#6ec87c',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <main className="projects page-enter">
      <div className="projects-header">
        <span className="section-label">02 / Projects</span>
        <h1>Selected <em>Work</em></h1>
        <p className="projects-sub">A curated selection of projects spanning product, tooling, and design systems.</p>
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`project-row ${active === project.id ? 'expanded' : ''}`}
            onClick={() => setActive(active === project.id ? null : project.id)}
            style={{ '--accent-color': project.color, '--i': i }}
          >
            <div className="project-meta">
              <span className="project-num">0{i + 1}</span>
              <span className="project-cat">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <div className="project-main">
              <h2>{project.title}</h2>
              <div className="project-toggle">{active === project.id ? '−' : '+'}</div>
            </div>

            <div className="project-detail">
              <p>{project.desc}</p>
              <div className="project-stack">
                {project.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <div className="project-links">
                <a href="#" className="proj-link">View Live →</a>
                <a href="#" className="proj-link">GitHub →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
