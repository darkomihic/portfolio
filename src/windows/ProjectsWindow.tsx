import DesktopIcon from '../components/DesktopIcon'
import Window, { type WindowChromeProps } from '../components/Window'
import { projects, type Project } from '../data/projects'

type ProjectsWindowProps = WindowChromeProps & { onOpenProject: (id: string) => void }

export function ProjectImage({ project, className }: { project: Project; className?: string }) {
  if (project.sprite) {
    return (
      <span
        className={['sprite', className].filter(Boolean).join(' ')}
        style={{ backgroundImage: `url('${project.image}')` }}
        role="img"
        aria-label={project.title}
      />
    )
  }
  return <img className={className} src={project.image} alt="" />
}

const addressBar = (
  <div className="explorer-address" aria-hidden="true">
    <span className="explorer-address-field">
      <img src="/ui/folder-small.png" alt="" />
      Projects
    </span>
    <span className="explorer-address-arrow" />
  </div>
)

export default function ProjectsWindow({ onOpenProject, ...chrome }: ProjectsWindowProps) {
  return (
    <Window
      title="Project Explorer"
      icon="/ui/folder-small.png"
      width={672}
      fillOnMobile
      toolbar={addressBar}
      status={`${projects.length} object(s)`}
      {...chrome}
    >
      <div className="panel explorer">
        {projects.map((project) => (
          <DesktopIcon
            key={project.id}
            className="desktop-icon--file"
            icon={<ProjectImage project={project} />}
            label={project.name}
            onOpen={() => onOpenProject(project.id)}
          />
        ))}
      </div>
    </Window>
  )
}
