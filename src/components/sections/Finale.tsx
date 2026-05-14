import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import FireflyWall from '../ui/FireflyWall'
import type { SectionProps } from './types'

export default function Finale({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="pin-scene image-scene finale-scene">
      <img className="scene-bg finale-bg" data-parallax data-speed="-5" src="/assets/backgrounds/mathalamparai-sunrise.webp" alt="" loading="lazy" />
      <div className="night-wash" />
      <div className="final-roots" />
      <img className="final-bike" src="/assets/cutouts/sridhar-bicycle-cutout.png" alt="" loading="lazy" />
      <FireflyWall />
      <StoryCopy scene={scene} align="center" />
      <footer className="site-footer">
        A cinematic tribute by{' '}
        <a href="https://brokailabs.com" target="_blank" rel="noreferrer">
          Brokai Labs
        </a>
        .
      </footer>
    </SceneFrame>
  )
}
