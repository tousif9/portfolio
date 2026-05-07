import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className="home page-enter">
      <div className="home-grid">
        <div className="home-tag">
          <span>Available for work</span>
          <span className="dot" />
        </div>

        <h1 className="home-headline">
          <span className="line-small">Creative</span>
          <span className="line-large">Developer</span>
          <span className="line-italic">& Designer</span>
        </h1>

        <p className="home-sub">
          I build thoughtful digital experiences — from code architecture 
          to visual design. Focused on craft, performance, and the small 
          details that make things feel alive.
        </p>

        <div className="home-cta">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-ghost">Get in Touch →</Link>
        </div>

        <div className="home-marquee">
          <div className="marquee-track">
            {['React', 'TypeScript', 'Node.js', 'Figma', 'PostgreSQL', 'Docker', 'Next.js', 'Tailwind', 'GraphQL', 'AWS'].map((t, i) => (
              <span key={i} className="marquee-item">{t} <span className="sep">·</span></span>
            ))}
            {['React', 'TypeScript', 'Node.js', 'Figma', 'PostgreSQL', 'Docker', 'Next.js', 'Tailwind', 'GraphQL', 'AWS'].map((t, i) => (
              <span key={`d${i}`} className="marquee-item">{t} <span className="sep">·</span></span>
            ))}
          </div>
        </div>

        <div className="home-scroll">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </div>

      <div className="home-deco">
        <div className="deco-circle" />
        <div className="deco-grain" />
      </div>
    </main>
  );
}
