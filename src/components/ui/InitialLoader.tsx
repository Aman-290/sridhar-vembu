import { useEffect, useState } from 'react'
import { criticalAssets } from '../../data/assets'

type InitialLoaderProps = {
  onDone?: () => void
}

const loadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const image = new Image()
    image.onload = () => resolve()
    image.onerror = () => resolve()
    image.src = src
  })

const loadVideo = (src: string) =>
  new Promise<void>((resolve) => {
    const video = document.createElement('video')
    const timeout = window.setTimeout(resolve, 12000)
    const done = () => {
      window.clearTimeout(timeout)
      resolve()
    }
    video.preload = 'auto'
    video.muted = true
    video.playsInline = true
    video.oncanplaythrough = done
    video.onerror = done
    video.src = src
    video.load()
  })

const waitForHeroVideoPlayback = () =>
  new Promise<void>((resolve) => {
    const video = document.querySelector<HTMLVideoElement>('.intro-video')
    if (!video) {
      resolve()
      return
    }

    let settled = false
    const cleanup = () => {
      video.removeEventListener('playing', check)
      video.removeEventListener('canplay', check)
      video.removeEventListener('canplaythrough', check)
      video.removeEventListener('timeupdate', check)
      video.removeEventListener('error', done)
    }
    const done = () => {
      if (settled) return
      settled = true
      window.clearTimeout(timeout)
      cleanup()
      resolve()
    }
    const hasBufferedPlayback = () => video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA && !video.paused && !video.ended
    const check = () => {
      if (hasBufferedPlayback()) done()
    }
    const timeout = window.setTimeout(done, 18000)

    video.preload = 'auto'
    video.muted = true
    video.playsInline = true
    video.addEventListener('playing', check)
    video.addEventListener('canplay', check)
    video.addEventListener('canplaythrough', check)
    video.addEventListener('timeupdate', check)
    video.addEventListener('error', done)

    video.load()
    const play = video.play()
    if (play) {
      play.then(check).catch(() => {
        if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) done()
      })
    }
    check()
  })

export default function InitialLoader({ onDone }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let cancelled = false
    let loaded = 0

    const finishOne = () => {
      loaded += 1
      if (!cancelled) setProgress(Math.round((loaded / criticalAssets.length) * 100))
    }

    const start = async () => {
      const minimumHold = new Promise((resolve) => window.setTimeout(resolve, 950))
      await Promise.all([
        minimumHold,
        Promise.all(
          criticalAssets.map(async (src) => {
            if (src.endsWith('.mp4')) {
              await loadVideo(src)
            } else {
              await loadImage(src)
            }
            finishOne()
          }),
        ),
      ])
      await waitForHeroVideoPlayback()

      if (!cancelled) {
        setProgress(100)
        window.setTimeout(() => {
          setHidden(true)
          onDone?.()
        }, 320)
      }
    }

    start()

    return () => {
      cancelled = true
    }
  }, [onDone])

  return (
    <div className={hidden ? 'initial-loader is-hidden' : 'initial-loader'} role="status" aria-live="polite" aria-label="Loading Sridhar Vembu tribute website">
      <div className="loader-grain" aria-hidden="true" />
      <div className="loader-orbit" aria-hidden="true">
        <span />
      </div>
      <div className="loader-copy">
        <p>Preparing the field notebook</p>
        <h1>Sridhar Vembu</h1>
        <strong>The Man Who Walked Back</strong>
      </div>
      <div className="loader-progress" aria-hidden="true">
        <i style={{ width: `${progress}%` }} />
      </div>
      <span className="loader-percent">{progress}%</span>
    </div>
  )
}
