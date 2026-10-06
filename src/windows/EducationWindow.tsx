import { useState } from 'react'
import Window, { type WindowChromeProps } from '../components/Window'
import { schools, type School } from '../data/education'

export default function EducationWindow(chrome: WindowChromeProps) {
  const [selected, setSelected] = useState<School['id']>('university')
  const school = schools.find((s) => s.id === selected)!

  return (
    <Window title="Education.exe" icon="/window-icons/education.png" width={672} {...chrome}>
      <div className="panel">
        <div className="profile">
          <img className="profile-image profile-image--icon" src={school.logo} alt="" />
          <div className="copy profile-copy">
            <h1 className="heading">{school.school}</h1>
            <p className="subheading">{school.date}</p>
            <p>
              <strong>{school.degree}</strong>
            </p>
            <p>{school.description}</p>
          </div>
        </div>
        <div className="button-row">
          {schools.map((s) => (
            <button
              key={s.id}
              type="button"
              className="btn"
              disabled={s.id === selected}
              onClick={() => setSelected(s.id)}
            >
              {s.tab}
            </button>
          ))}
        </div>
      </div>
    </Window>
  )
}
