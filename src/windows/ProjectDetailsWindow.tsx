import Window, { type WindowChromeProps } from '../components/Window'
import type { Project } from '../data/projects'
import { ProjectImage } from './ProjectsWindow'

type ProjectDetailsWindowProps = WindowChromeProps & { project: Project }

export default function ProjectDetailsWindow({ project, ...chrome }: ProjectDetailsWindowProps) {
  return (
    <Window
      title="ProjectDetails.exe"
      icon="/window-icons/project.png"
      width={672}
      status={project.inDevelopment ? 'In development' : 'Ready'}
      {...chrome}
    >
      <div className="panel">
        <div className="project">
          <div className="copy project-copy">
            <h1 className="heading">{project.title}</h1>
            <p className="subheading">{project.stack.join(', ')}</p>
            <p>{project.description}</p>
          </div>
          <ProjectImage project={project} className="project-image" />
        </div>
        <div className="button-row">
          {project.link ? (
            <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
              Take a look!
            </a>
          ) : (
            <button type="button" className="btn" disabled>
              Coming soon
            </button>
          )}
        </div>
      </div>
    </Window>
  )
}
