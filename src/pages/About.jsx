import './About.css';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'CSS/SCSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
  { category: 'Tools', items: ['Docker', 'AWS', 'Git', 'Figma'] },
  { category: 'Practices', items: ['Agile', 'TDD', 'CI/CD', 'Accessibility'] },
];

const experience = [
  { year: '2023–Present', role: 'Senior Frontend Engineer', company: 'DesignLab Inc.' },
  { year: '2021–2023', role: 'Full Stack Developer', company: 'Startup Studio' },
  { year: '2019–2021', role: 'Junior Developer', company: 'Web Agency Co.' },
];

export default function About() {
  return (
    <main className="about page-enter">
      <div className="about-header">
        <span className="section-label">01 / About</span>
        <h1>The person<br /><em>behind the code</em></h1>
      </div>

      <div className="about-body">
        <div className="about-bio">
          <div className="bio-image">
            <div className="bio-placeholder">
              <span>J.D.</span>
            </div>
            <div className="bio-badge">
              <span>5+ yrs exp</span>
            </div>
          </div>

          <div className="bio-text">
            <p>
              I'm <strong>Jamie Doe</strong>, a developer with a designer's eye. I care deeply about 
              the intersection of engineering and aesthetics — building things that work beautifully, 
              not just functionally.
            </p>
            <p>
              Currently based in San Francisco, I've worked across startups and agencies, shipping 
              products used by millions. I believe in clean code, clear communication, and leaving 
              things better than I found them.
            </p>
            <p>
              Outside of work, I shoot film photography, read design history, and occasionally 
              get too invested in perfecting my espresso technique.
            </p>
          </div>
        </div>

        <div className="about-skills">
          <h2 className="section-title">Skills & Stack</h2>
          <div className="skills-grid">
            {skills.map(({ category, items }) => (
              <div key={category} className="skill-group">
                <span className="skill-category">{category}</span>
                <ul>
                  {items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="about-experience">
          <h2 className="section-title">Experience</h2>
          <div className="exp-list">
            {experience.map(({ year, role, company }) => (
              <div key={year} className="exp-item">
                <span className="exp-year">{year}</span>
                <div className="exp-detail">
                  <strong>{role}</strong>
                  <span>{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
