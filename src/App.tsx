import { useCallback, useEffect, useState } from 'react'
import DesktopIcon from './components/DesktopIcon'
import type { Point, WindowChromeProps } from './components/Window'
import { projects } from './data/projects'
import { useMediaQuery } from './hooks/useMediaQuery'
import AboutWindow from './windows/AboutWindow'
import ContactWindow from './windows/ContactWindow'
import EducationWindow from './windows/EducationWindow'
import ExperienceWindow from './windows/ExperienceWindow'
import ProjectDetailsWindow from './windows/ProjectDetailsWindow'
import ProjectsWindow from './windows/ProjectsWindow'
import TutoringWindow from './windows/TutoringWindow'
import type { WindowId } from './windows/types'
import './App.css'
import './windows/windows.css'

// Where each window first appears on desktop, taken from the Figma frames.
const DEFAULT_POSITIONS: Record<WindowId, Point> = {
  about: { x: 334, y: 147 },
  experience: { x: 380, y: 346 },
  projects: { x: 228, y: 183 },
  project: { x: 580, y: 465 },
  tutoring: { x: 300, y: 120 },
  education: { x: 175, y: 366 },
  contact: { x: 189, y: 301 },
}

const BASE_Z_INDEX = 10

type Shortcut = { label: string; icon: string } & ({ window: WindowId } | { href: string })

const SHORTCUTS: Shortcut[] = [
  { label: 'About me', icon: '/desktop/about.png', window: 'about' },
  { label: 'My experience', icon: '/desktop/experience.png', window: 'experience' },
  { label: 'Projects', icon: '/desktop/projects.png', window: 'projects' },
  { label: 'Tutoring', icon: '/desktop/tutoring.png', window: 'tutoring' },
  { label: 'Education', icon: '/desktop/education.png', window: 'education' },
  { label: 'LinkedIn', icon: '/desktop/linkedin.png', href: 'https://www.linkedin.com/in/darko-mihic/' },
  { label: 'Contact me', icon: '/desktop/contact.png', window: 'contact' },
]

const MOBILE_QUERY = '(max-width: 767px)'

export default function App() {
  const isMobile = useMediaQuery(MOBILE_QUERY)
  // Open windows from bottom to top; the last one is in front. Phones start on the bare icon grid,
  // since a fixed full-width window would hide it.
  const [stack, setStack] = useState<WindowId[]>(() =>
    window.matchMedia(MOBILE_QUERY).matches ? [] : ['about'],
  )
  const [positions, setPositions] = useState(DEFAULT_POSITIONS)
  const [projectId, setProjectId] = useState(projects[0].id)

  const openWindow = useCallback((id: WindowId) => {
    setStack((current) => [...current.filter((w) => w !== id), id])
  }, [])

  const closeWindow = useCallback((id: WindowId) => {
    setStack((current) => current.filter((w) => w !== id))
  }, [])

  const focusWindow = useCallback((id: WindowId) => {
    setStack((current) => (current.at(-1) === id ? current : [...current.filter((w) => w !== id), id]))
  }, [])

  const openProject = useCallback(
    (id: string) => {
      setProjectId(id)
      openWindow('project')
    },
    [openWindow],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setStack((current) => current.slice(0, -1))
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const chrome = (id: WindowId): WindowChromeProps => ({
    position: positions[id],
    zIndex: BASE_Z_INDEX + stack.indexOf(id),
    isMobile,
    onClose: () => closeWindow(id),
    onFocus: () => focusWindow(id),
    onMove: (position) => setPositions((current) => ({ ...current, [id]: position })),
  })

  const isOpen = (id: WindowId) => stack.includes(id)
  const project = projects.find((p) => p.id === projectId) ?? projects[0]

  // Windows render in a fixed order and stack via z-index, so focusing one never remounts it.
  return (
    <main className="desktop">
      <nav className="desktop-icons" aria-label="Desktop">
        {SHORTCUTS.map((shortcut) => (
          <DesktopIcon
            key={shortcut.label}
            icon={<img src={shortcut.icon} alt="" />}
            label={shortcut.label}
            {...('href' in shortcut
              ? { href: shortcut.href }
              : { onOpen: () => openWindow(shortcut.window) })}
          />
        ))}
      </nav>

      {isOpen('about') && <AboutWindow {...chrome('about')} onOpen={openWindow} />}
      {isOpen('experience') && <ExperienceWindow {...chrome('experience')} />}
      {isOpen('projects') && <ProjectsWindow {...chrome('projects')} onOpenProject={openProject} />}
      {isOpen('project') && <ProjectDetailsWindow {...chrome('project')} project={project} />}
      {isOpen('tutoring') && <TutoringWindow {...chrome('tutoring')} onOpen={openWindow} />}
      {isOpen('education') && <EducationWindow {...chrome('education')} />}
      {isOpen('contact') && <ContactWindow {...chrome('contact')} />}
    </main>
  )
}
