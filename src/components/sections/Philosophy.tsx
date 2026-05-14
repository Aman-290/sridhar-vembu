import { useState } from 'react'
import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

const beliefs = [
  ['Grow as fast as possible.', 'There is only a certain rate at which you can grow.'],
  ['Hire for credentials.', 'Train for depth.'],
  ['Raise capital to move faster.', 'Customer revenue is cleaner oxygen.'],
  ['Software is scale.', 'Software is craft.'],
  ['AI will replace people. Panic.', 'Contemplate death calmly. Become fearless.'],
]

export default function Philosophy({ scene }: SectionProps) {
  const [active, setActive] = useState(0)

  return (
    <SceneFrame scene={scene} className="philosophy-scene">
      <img className="scene-bg philosophy-generated-bg" src="/assets/backgrounds/philosophy-notebook-generated.webp" alt="" loading="lazy" />
      <div className="philosophy-wash" aria-hidden="true" />
      <StoryCopy scene={scene} align="center" />
      <div className="belief-board">
        {beliefs.map(([conventional, sridhar], index) => (
          <button key={conventional} className={active === index ? 'belief-pair active' : 'belief-pair'} type="button" onClick={() => setActive(index)}>
            <span>{conventional}</span>
            <i />
            <strong>{sridhar}</strong>
          </button>
        ))}
      </div>
      <div className="seed-clock" aria-hidden="true" />
    </SceneFrame>
  )
}
