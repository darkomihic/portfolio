import { useEffect, useLayoutEffect, useRef, type PointerEvent, type ReactNode } from 'react'
import './Window.css'

export type Point = { x: number; y: number }

type WindowProps = {
  title: string
  icon: string
  width: number
  position: Point
  zIndex: number
  isMobile: boolean
  /** On phones, stretch the window to the full screen height instead of centering it. */
  fillOnMobile?: boolean
  /** Rendered between the menu bar and the body (e.g. the explorer address bar). */
  toolbar?: ReactNode
  status?: ReactNode
  className?: string
  onClose: () => void
  onFocus: () => void
  onMove: (position: Point) => void
  children: ReactNode
}

/** Props the window manager passes to every window; each window adds its own title, icon and content. */
export type WindowChromeProps = Pick<
  WindowProps,
  'position' | 'zIndex' | 'isMobile' | 'onClose' | 'onFocus' | 'onMove'
>

// How much of a window must stay on screen while dragging, so it can always be grabbed again.
const MIN_VISIBLE_X = 80
const TITLE_BAR_HEIGHT = 22
const SCREEN_MARGIN = 10

function clampToViewport({ x, y }: Point, width: number): Point {
  return {
    x: Math.min(Math.max(x, MIN_VISIBLE_X - width), window.innerWidth - MIN_VISIBLE_X),
    y: Math.min(Math.max(y, 0), window.innerHeight - TITLE_BAR_HEIGHT),
  }
}

export default function Window({
  title,
  icon,
  width,
  position,
  zIndex,
  isMobile,
  fillOnMobile,
  toolbar,
  status = 'Ready',
  className,
  onClose,
  onFocus,
  onMove,
  children,
}: WindowProps) {
  const ref = useRef<HTMLElement>(null)
  const dragOffset = useRef<Point | null>(null)

  // Move keyboard focus into the window when it opens.
  useEffect(() => {
    ref.current?.focus({ preventScroll: true })
  }, [])

  // The default position doesn't know the window's height, so nudge it fully on screen once rendered.
  useLayoutEffect(() => {
    if (isMobile || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const maxX = Math.max(SCREEN_MARGIN, window.innerWidth - rect.width - SCREEN_MARGIN)
    const maxY = Math.max(SCREEN_MARGIN, window.innerHeight - rect.height - SCREEN_MARGIN)
    if (position.x > maxX || position.y > maxY) {
      onMove({ x: Math.min(position.x, maxX), y: Math.min(position.y, maxY) })
    }
    // Only on open (or when leaving the phone layout): after that the user controls the position.
  }, [isMobile])

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (isMobile || event.button !== 0) return
    if ((event.target as HTMLElement).closest('button')) return
    dragOffset.current = { x: event.clientX - position.x, y: event.clientY - position.y }
    event.currentTarget.setPointerCapture(event.pointerId)
    event.preventDefault()
  }

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!dragOffset.current) return
    onMove(
      clampToViewport(
        { x: event.clientX - dragOffset.current.x, y: event.clientY - dragOffset.current.y },
        width,
      ),
    )
  }

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!dragOffset.current) return
    dragOffset.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const classes = ['window', isMobile && 'window--mobile', isMobile && fillOnMobile && 'window--fill', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      ref={ref}
      className={classes}
      role="dialog"
      aria-label={title}
      tabIndex={-1}
      style={isMobile ? { zIndex } : { zIndex, width, left: position.x, top: position.y }}
      onPointerDownCapture={onFocus}
    >
      <header
        className="window-titlebar"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <img className="window-icon" src={icon} alt="" />
        <h2 className="window-title">{title}</h2>
        <div className="window-controls">
          <span className="window-control" aria-hidden="true">
            <img src="/ui/minimize.svg" alt="" width={15} height={15} />
          </span>
          <span className="window-control window-control--maximize" aria-hidden="true">
            <span />
          </span>
          <button type="button" className="window-control" aria-label={`Close ${title}`} onClick={onClose}>
            <img src="/ui/close.svg" alt="" width={15} height={15} />
          </button>
        </div>
      </header>

      <nav className="window-menu" aria-hidden="true">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
      </nav>

      {toolbar}

      <div className="window-body">{children}</div>

      <footer className="window-status">{status}</footer>
    </section>
  )
}
