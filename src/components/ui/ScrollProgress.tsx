import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className={progress > 0.035 ? 'route-progress is-visible' : 'route-progress'} aria-hidden="true">
      <svg viewBox="0 0 44 220" role="presentation">
        <path className="route-progress-base" d="M22 5 C7 35 36 58 21 88 C8 116 37 139 21 169 C12 188 20 207 31 215" />
        <path
          className="route-progress-line"
          pathLength="1"
          style={{ strokeDashoffset: 1 - progress }}
          d="M22 5 C7 35 36 58 21 88 C8 116 37 139 21 169 C12 188 20 207 31 215"
        />
      </svg>
    </div>
  )
}
