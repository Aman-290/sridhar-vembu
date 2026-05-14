import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

export default function DeparturePlane({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="image-scene departure-scene">
      <img className="scene-bg silicon-bg" data-parallax data-speed="-12" src="/assets/backgrounds/silicon-valley-dusk.webp" alt="" loading="lazy" />
      <div className="airplane-window" data-cursor="map">
        <div className="cloud-circuit" />
      </div>
      <img className="boarding-pass" src="/assets/objects/boarding-pass-collage.png" alt="" loading="lazy" />
      <svg className="ocean-route" viewBox="0 0 800 260" aria-hidden="true">
        <path d="M44 186 C190 44 358 236 498 92 S695 64 758 142" />
        <text x="48" y="216">Chennai</text>
        <text x="318" y="74">Princeton</text>
        <text x="590" y="116">San Diego</text>
      </svg>
      <StoryCopy scene={scene} align="right" />
    </SceneFrame>
  )
}
