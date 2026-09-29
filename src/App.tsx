import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  AtSign,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import { advocacyThemes, educationTopics, experiences, projects, skills, training, workshopTopics } from './data/portfolio'
import { SectionHeading } from './components/SectionHeading'
import './App.css'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]
const currentYear = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('sylvia-theme')
    return savedTheme === 'dark' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })
  const closeMenu = () => setMenuOpen(false)
  const toggleTheme = () => {
    const nextMode = !darkMode
    setDarkMode(nextMode)
    window.localStorage.setItem('sylvia-theme', nextMode ? 'dark' : 'light')
  }

  return (
    <div className={darkMode ? 'portfolio theme-dark' : 'portfolio'}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sylvia Isaboke, home" onClick={closeMenu}>
          <span className="brand-mark">SI</span>
          <span className="brand-name">Sylvia Isaboke<span>Counselling Psychologist</span></span>
        </a>
        <button
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={darkMode}
          className="theme-toggle"
          onClick={toggleTheme}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          type="button"
        >
          {darkMode ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
        </button>
        <button
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-cta" href="mailto:nyamoitasylivia0@gmail.com">
            Say hello <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-wrap" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Counselling psychologist <span className="eyebrow-divider">/</span> Nairobi, Kenya</p>
            <h1>A steadier path through life's <em>harder seasons.</em></h1>
            <p className="hero-intro">
              A thoughtful, compassionate space to feel heard, make sense of what you're carrying, and find a way forward.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#about">Get to know my work <ArrowRight size={16} /></a>
              <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-note"><HeartHandshake size={18} strokeWidth={1.5} /><span>Care grounded in empathy, respect, and professional ethics</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-wrap">
              <img src="/images/sylvia-portrait.png" alt="Sylvia Isaboke, counselling psychologist" />
            </div>
            <span className="portrait-caption">A space to feel heard</span>
            <span className="hero-index" aria-hidden="true">01 <span /> 04</span>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section className="intro-section" id="about">
          <div className="page-wrap intro-grid">
            <SectionHeading number="01" eyebrow="A little about me" title="Care starts with listening." />
            <div className="intro-copy">
              <p className="intro-lead">I'm Sylvia, a counselling psychologist committed to helping people build resilience, heal from challenges, and thrive.</p>
              <p>I'm especially interested in adolescent mental health, trauma-informed care, emotional resilience, and psychoeducation. I believe healing begins when people feel heard, understood, and empowered to make positive changes in their lives.</p>
              <div className="values-row">
                <div><span>My vision</span><p>A mentally healthy society where every person feels seen, supported, and able to reach their potential.</p></div>
                <div><span>My mission</span><p>Promoting mental wellness through counselling, psychoeducation, advocacy, and compassionate support.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="practice-section page-wrap" aria-labelledby="practice-title">
          <div className="practice-heading">
            <div>
              <p className="eyebrow">How I show up</p>
              <h2 id="practice-title">Support that meets you<br />with <em>care and respect.</em></h2>
            </div>
            <p>Every person deserves a safe, non-judgemental space to explore their experiences, grow self-awareness, and discover their strengths.</p>
          </div>
          <div className="skills-layout">
            <div className="skills-intro"><span className="skills-symbol"><HeartHandshake size={31} strokeWidth={1.3} /></span><span>My practice is guided by</span></div>
            <div className="skills-grid">
              {skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span>{skill}</div>)}
            </div>
          </div>
          <blockquote>"Healing begins when we feel heard."<cite>Sylvia Isaboke</cite></blockquote>
        </section>

        <section className="experience-section" id="experience">
          <div className="page-wrap experience-inner">
            <SectionHeading number="02" eyebrow="My journey" title="Learning by showing up." />
            <div className="experience-list">
              {experiences.map((experience) => (
                <article className="experience-row" key={`${experience.organization}-${experience.period}`}>
                  <p className="experience-period">{experience.period}</p>
                  <div className="experience-main"><h3>{experience.role}</h3><p>{experience.organization}</p></div>
                  <p className="experience-detail">{experience.description}</p>
                </article>
              ))}
            </div>
            <div className="education-row">
              <div><span className="detail-label">Education</span><h3>Diploma in Counselling Psychology</h3><p>The Eldoret National Polytechnic <span>·</span> 2025</p></div>
              <div><span className="detail-label">Additional training</span><div className="training-list">{training.map((item) => <span key={item}>{item}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section className="projects-section page-wrap" id="community">
          <div className="projects-top">
            <SectionHeading number="03" eyebrow="Beyond the counselling room" title="Making mental health easier to talk about." />
            <p>Accessible, thoughtful education can help people recognise what they're feeling, support one another, and reach out when they need to.</p>
          </div>
          <div className="project-gallery">
            {projects.map((project, index) => (
              <article className="project-item" key={project.image}>
                <div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /><span>0{index + 1}</span></div>
                <p className="project-label">Mental health education</p>
                <h3>{project.title}</h3>
              </article>
            ))}
            <aside className="project-note"><Sparkles className="note-star" size={23} strokeWidth={1.5} /><p>Created to grow awareness through accessible, evidence-informed psychoeducation.</p><span className="note-caption">Topics explored</span><div className="project-topic-list">{educationTopics.map((topic) => <span key={topic}>{topic}</span>)}</div></aside>
          </div>
          <div className="community-row">
            <div className="community-heading"><span className="detail-label">Community engagement</span><h3>Conversations that<br /><em>open doors.</em></h3><p>Mental health talks and workshops designed to encourage understanding and help-seeking.</p></div>
            <div className="topic-area"><span className="detail-label">Workshop topics</span><div className="topic-list">{workshopTopics.map((topic) => <span key={topic}>{topic}</span>)}</div></div>
            <div className="impact-area"><span className="detail-label">Advocacy themes</span><p>{advocacyThemes.join(' · ')}</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-wrap contact-inner">
            <div className="contact-copy"><p className="eyebrow">A good place to begin</p><h2>Let's make room<br />for <em>a conversation.</em></h2><p>I welcome opportunities to learn, collaborate, and make a positive impact in people's lives.</p><a className="button button-light" href="mailto:nyamoitasylivia0@gmail.com">Get in touch <ArrowUpRight size={16} /></a></div>
            <div className="contact-details">
              <a href="mailto:nyamoitasylivia0@gmail.com"><Mail size={18} /><span><small>Email</small>nyamoitasylivia0@gmail.com</span><ArrowUpRight className="contact-arrow" size={16} /></a>
              <a href="tel:+254793689696"><Phone size={18} /><span><small>Phone</small>+254 793 689 696</span><ArrowUpRight className="contact-arrow" size={16} /></a>
              <a href="https://www.instagram.com/nyamoit-a/" target="_blank" rel="noreferrer"><AtSign size={18} /><span><small>Instagram</small>@nyamoit-a</span><ArrowUpRight className="contact-arrow" size={16} /></a>
              <div className="location-line"><MapPin size={18} /><span><small>Based in</small>Nairobi, Kenya</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap"><a className="footer-brand" href="#top">Sylvia Isaboke<span>·</span></a><p>Counselling psychologist <span>·</span> Nairobi, Kenya</p><a href="#top" className="back-top">Back to top <ArrowUpRight size={14} /></a><small>© {currentYear} Sylvia Isaboke</small></footer>
    </div>
  )
}

export default App
