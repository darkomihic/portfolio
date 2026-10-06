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
              Freelance fullstack web developer specializing in React, Node.js, and PostgreSQL, currently open
              to new clients and projects. I build complete web solutions — from database modeling and REST
              APIs to responsive frontends — with hands-on experience in e-commerce platforms, third-party
              integrations (Shopify, payment and shipping APIs), and deploying applications on Linux servers. I
              am particularly interested in building information systems, exploring web technologies, and data
              analysis. Flexible and communicative, I work well both independently and in a team, and have
              several years of experience collaborating remotely with international clients.
            </p>
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
