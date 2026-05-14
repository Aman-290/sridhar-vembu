import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

export default function TheReturn({ scene, reducedMotion }: SectionProps) {
  return (
    <SceneFrame scene={scene} className={reducedMotion ? 'return-scene reduced' : 'return-scene'}>
      <img className="scene-bg return-generated-bg" src="/assets/backgrounds/return-journey-generated.webp" alt="" loading="lazy" />
      <div className="return-gradient" aria-hidden="true" />
      <div className="return-route" aria-hidden="true">
        <span>Bay Area</span>
        <i />
        <span>Mathalamparai</span>
      </div>
      <div className="return-stamps" aria-hidden="true">
        <span>2019</span>
        <span>California calls before dawn</span>
        <span>Western Ghats at sunrise</span>
      </div>
      <div className="return-compass" aria-hidden="true">S</div>
      <p className="return-note">Power did not disappear when the road narrowed. It changed address.</p>
      <img className="return-bike" src="/assets/cutouts/sridhar-bicycle-cutout.png" alt="" loading="lazy" />
      <StoryCopy scene={scene} />
    </SceneFrame>
  )
}
