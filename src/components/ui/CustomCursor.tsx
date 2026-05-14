import { useEffect, useState } from 'react'

type CursorMode = 'default' | 'map' | 'badge' | 'seed'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -80, y: -80 })
  const [mode, setMode] = useState<CursorMode>('default')

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      const target = event.target instanceof HTMLElement ? event.target.closest<HTMLElement>('[data-cursor]') : null
      setMode((target?.dataset.cursor as CursorMode | undefined) ?? 'default')
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div className={`custom-cursor cursor-${mode}`} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}>
      <span />
    </div>
  )
}
