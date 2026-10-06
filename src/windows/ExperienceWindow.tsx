import { useState } from 'react'
import Window, { type WindowChromeProps } from '../components/Window'
import { jobs } from '../data/experience'

export default function ExperienceWindow(chrome: WindowChromeProps) {
  const [index, setIndex] = useState(0)
  const job = jobs[index]

  return (
    <Window
      title="My experience.exe"
      icon="/window-icons/experience.png"
      width={680}
      status={`Ready — ${index + 1} of ${jobs.length}`}
      {...chrome}
    >
      <div className="panel">
        <div className="experience">
          <div className="experience-nav">
            <button type="button" className="btn" disabled={index === 0} onClick={() => setIndex(index - 1)}>
              Previous
            </button>
            <img className="experience-logo" src={job.logo} alt={job.employer} />
            <button
              type="button"
              className="btn"
              disabled={index === jobs.length - 1}
              onClick={() => setIndex(index + 1)}
            >
              Next
            </button>
          </div>
          <h1 className="heading">{job.role}</h1>
          <p className="subheading">
            {job.link ? (
              <a href={job.link} target="_blank" rel="noopener noreferrer">
                {job.employer}
              </a>
            ) : (
              job.employer
            )}{' '}
            · {job.date}
          </p>
          <div className="copy experience-copy">
            <p>{job.description}</p>
            <p className="subheading">{job.technologies.join(' · ')}</p>
          </div>
        </div>
      </div>
    </Window>
  )
}
