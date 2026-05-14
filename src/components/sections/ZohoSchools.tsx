import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import YearSlider from '../ui/YearSlider'
import type { SectionProps } from './types'

export default function ZohoSchools({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="pin-scene image-scene schools-scene">
      <img className="scene-bg classroom-bg" data-parallax data-speed="-8" src="/assets/backgrounds/zoho-schools-classroom.webp" alt="" loading="lazy" />
      <img className="diploma-leaves" src="/assets/objects/diploma-leaves.png" alt="" loading="lazy" />
      <img className="cutout students-cutout" data-fixed-visual="true" src="/assets/cutouts/students-laptops-cutout.png" alt="Stylized rural students using laptops" loading="lazy" />
      <StoryCopy scene={scene} />
      <YearSlider />
    </SceneFrame>
  )
}
