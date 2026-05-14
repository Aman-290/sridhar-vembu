import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

export default function HeroSoil({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="image-scene hero-soil">
      <img className="scene-bg" data-parallax data-speed="-5" src="/assets/backgrounds/paddy-dawn-wide.webp" alt="" loading="eager" />
      <img
        className="cutout cutout-porch"
        data-parallax
        data-speed="14"
        src="/assets/cutouts/sridhar-porch-cutout.png"
        alt="Stylized illustration of Sridhar Vembu seated near a rural porch"
      />
      <StoryCopy scene={scene} />
    </SceneFrame>
  )
}
