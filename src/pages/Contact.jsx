import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="contact page-enter">
      <div className="contact-header">
        <span className="section-label">03 / Contact</span>
        <h1>Let's build<br /><em>something great</em></h1>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <p>
            I'm open to freelance projects, full-time opportunities, and interesting 
            collaborations. If you have an idea or a role you think I'd be a fit for, 
            I'd love to hear from you.
          </p>

          <div className="contact-links">
            <a href="mailto:hello@jamiedoe.dev" className="contact-channel">
              <span className="channel-label">Email</span>
              <span className="channel-value">hello@jamiedoe.dev</span>
              <span className="channel-arrow">→</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-channel">
              <span className="channel-label">GitHub</span>
              <span className="channel-value">@jamiedoe</span>
              <span className="channel-arrow">→</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-channel">
              <span className="channel-label">LinkedIn</span>
              <span className="channel-value">Jamie Doe</span>
              <span className="channel-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="success-state">
              <div className="success-icon">✓</div>
              <h3>Message sent</h3>
              <p>Thanks for reaching out — I'll get back to you within a day or two.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <span className="btn-arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
