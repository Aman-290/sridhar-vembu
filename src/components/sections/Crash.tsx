import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

export default function Crash({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="image-scene crash-scene">
      <img className="scene-bg crash-bg" data-parallax data-speed="-6" src="/assets/backgrounds/crash-room-dark.webp" alt="" loading="lazy" />
      <img className="crt-monitor" src="/assets/objects/crt-revenue-crash.png" alt="" loading="lazy" />
      <img className="term-sheets" data-parallax data-speed="20" src="/assets/objects/vc-term-sheets-cutout.png" alt="" loading="lazy" />
      <svg className="crash-graph" viewBox="0 0 500 220" aria-label="Revenue graph falling sharply">
        <path d="M18 185 L92 150 L168 102 L245 54 L312 44 L352 70 L385 128 L420 178 L472 190" />
      </svg>
      <StoryCopy scene={scene} />
    </SceneFrame>
  )
}
