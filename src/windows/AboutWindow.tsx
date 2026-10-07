import Window, { type WindowChromeProps } from '../components/Window'
import type { WindowId } from './types'

type AboutWindowProps = WindowChromeProps & { onOpen: (id: WindowId) => void }

export default function AboutWindow({ onOpen, ...chrome }: AboutWindowProps) {
  return (
    <Window title="About me.exe" icon="/window-icons/about.png" width={680} {...chrome}>
      <div className="panel">
        <div className="profile">
          <img className="profile-image" src="/darko.png" alt="Darko Mihić" />
          <div className="copy profile-copy">
            <h1 className="heading">Darko Mihić</h1>
            <p className="subheading">Freelance Web Developer</p>
            <p>
              I'm a freelance fullstack web developer specializing in React, Node.js and PostgreSQL, and I'm
              currently open to new clients and projects.
            </p>
            <p>
              I handle the whole process, from the first sketch to the live site: design, development and
              deployment. Whether you need a clean portfolio website, a
              Shopify store, or a custom web app built to streamline and grow your business, I build solutions
              that look good, work well and are made to last.
            </p>
            <p>
              You don't need a fully defined plan to get started. If you only have a rough idea, I'll help turn
              it into a clear direction. I'll ask the right questions, suggest what will actually make a
              difference, and help shape the project before any code is written. If you want to improve your web
              presence, attract more customers, or finally build the app idea you've been thinking about, I can
              help you get there.
            </p>
            <h3>Services</h3>
            <ul className="services">
              <li>
                <strong>Portfolio &amp; business websites:</strong> Fast, modern, responsive sites that make a
                strong first impression.
              </li>
              <li>
                <strong>Custom web applications:</strong> Full-stack apps built with React, Node.js and PostgreSQL
                to automate work and help your business grow.
              </li>
              <li>
                <strong>Shopify stores:</strong> Store setup, customization and improvements to help you sell
                more.
              </li>
              <li>
                <strong>UI/UX design:</strong> Clean, user-focused design that makes the most of your brand.
              </li>
              <li>
                <strong>Deployment &amp; launch:</strong> Hosting, domains and getting your project live and
                running smoothly.
              </li>
              <li>
                <strong>Consulting &amp; idea development:</strong> Not sure what you need? I'll help you plan it,
                scope it and bring it to life.
              </li>
            </ul>
            <p>
              Based in Novi Sad, Serbia. When I'm not coding, I enjoy playing sports, especially basketball, and
              I also like hiking. I'm also an avid gamer, which naturally led me to explore game development. I
              love working on challenging projects, I always have something that I'm building. I believe that
              building is the best way to learn and improve my skills. Also, I love sharing my knowledge with
              others, whether it be through tutoring or working alongside others on projects.
            </p>
            <h3>Currently building</h3>
            <p>
              Working on Shipbling, a Singapore-based e-commerce platform — engineering a multi-store sync
              system between Shopify and Shopee, covering product publishing, order ingestion, and real-time
              inventory updates. Also finishing my bachelor's thesis.
            </p>
            <h3>Open to freelance</h3>
            <p>
              Currently freelancing full-time, but open to additional freelance opportunities — especially web
              projects, custom applications, or consulting. You can also find me on{' '}
              <a href="https://www.linkedin.com/in/darko-mihic/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{' '}
              and{' '}
              <a href="https://github.com/darkomihic" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
            <p>
              <strong>Let's talk about what you're building.</strong> Click the <strong>Contact me</strong> button
              below to get in touch.
            </p>
          </div>
        </div>
        <div className="button-row">
          <button type="button" className="btn" onClick={() => onOpen('projects')}>
            Projects
          </button>
          <button type="button" className="btn" onClick={() => onOpen('tutoring')}>
            Tutoring
          </button>
          <button type="button" className="btn" onClick={() => onOpen('contact')}>
            Contact me
          </button>
        </div>
      </div>
    </Window>
  )
}
