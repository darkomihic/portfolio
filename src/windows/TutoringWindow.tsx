import Window, { type WindowChromeProps } from '../components/Window'
import type { WindowId } from './types'

type TutoringWindowProps = WindowChromeProps & { onOpen: (id: WindowId) => void }

const scratchLink = (
  <a href="https://www.scratchfoundation.org/home" target="_blank" rel="noopener noreferrer">
    Scratch
  </a>
)

export default function TutoringWindow({ onOpen, ...chrome }: TutoringWindowProps) {
  return (
    <Window title="Tutoring.exe" icon="/desktop/tutoring.png" width={680} {...chrome}>
      <div className="panel">
        <div className="profile">
          <img className="profile-image profile-image--icon" src="/desktop/tutoring.png" alt="" />
          <div className="copy profile-copy">
            <h1 className="heading">Tutoring</h1>
            <p className="subheading">Programming lessons for young learners</p>
            <p>
              I have a strong passion towards teaching. For multiple years I have been teaching at an online
              school and also offer my own private sessions. I have experience working with students ages 8-18
              and also SEN students. I have experience in many programming languages, including C#, Java,
              JavaScript, C, etc. 
            </p>
            <p>
              Coming from a family with a background in education I have had the chance to learn from amazing
              teachers and I use all of that knowledge in my lessons. My main goal is to showcase all of the
              amazing details in programming to the young learners, making them interested and willing to learn
              from lesson to lesson.
            </p>
            <h3>Personalized lessons</h3>
            <p>
              Do you want to learn a specific language? I offer personalized lessons catered to each student.
              Ranging from the basics of coding, web development and even game development in Unity or Roblox
              Studio.
            </p>
            <p>
              If you are interested in my tutoring services you can use the contact form or send an email at{' '}
              <a href="mailto:mihic.dev@gmail.com">mihic.dev@gmail.com</a>.
            </p>
          </div>
        </div>
        <div className="button-row">
          <button type="button" className="btn" onClick={() => onOpen('contact')}>
            Contact me
          </button>
        </div>
      </div>
    </Window>
  )
}
