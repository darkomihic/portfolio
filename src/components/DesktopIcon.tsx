import type { ReactNode } from 'react'
import './DesktopIcon.css'

type DesktopIconProps = {
  icon: ReactNode
  label: string
  /** External links render as an anchor; everything else opens a window. */
  href?: string
  onOpen?: () => void
  className?: string
}

export default function DesktopIcon({ icon, label, href, onOpen, className }: DesktopIconProps) {
  const classes = ['desktop-icon', className].filter(Boolean).join(' ')
  const content = (
    <>
      <span className="desktop-icon-image">{icon}</span>
      <span className="desktop-icon-label">{label}</span>
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onOpen}>
      {content}
    </button>
  )
}
