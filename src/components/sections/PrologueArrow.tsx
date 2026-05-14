import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

export default function PrologueArrow({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="intro-video-scene">
      <video className="intro-video" autoPlay muted loop playsInline preload="auto" poster="/assets/backgrounds/paddy-dawn-wide.webp">
        <source src="/assets/backgrounds/background.mp4" type="video/mp4" />
      </video>
      <div className="intro-scrim" aria-hidden="true" />
      <div className="intro-field-lines" aria-hidden="true" />
      <div className="intro-title-card">
        <StoryCopy scene={scene} titleAs="h1" />
      </div>
    </SceneFrame>
  )
}
