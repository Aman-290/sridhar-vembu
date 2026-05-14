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

const beliefVisuals = [
  {
    kicker: 'Growth Rate',
    title: 'A company grows at the speed its roots can hold.',
    note: 'The outer ring can expand only after the inner ring strengthens.',
  },
  {
    kicker: 'Talent',
    title: 'Credentials become a starting line, not a gate.',
    note: 'Depth is taught in layers: math, craft, practice, judgment.',
  },
  {
    kicker: 'Capital',
    title: 'Customer revenue keeps the oxygen clean.',
    note: 'Every bar is earned demand, not borrowed urgency.',
  },
  {
    kicker: 'Craft',
    title: 'The suite is shaped like a workshop, not a shopping cart.',
    note: 'Pieces are carved, tested, joined, and kept inside the system.',
  },
  {
    kicker: 'Fear',
    title: 'Calm is a technical advantage.',
    note: 'When panic drops, attention returns to the work in front of you.',
  },
]

export default function Philosophy({ scene }: SectionProps) {
  const [active, setActive] = useState(0)
  const visual = beliefVisuals[active]

  return (
    <SceneFrame scene={scene} className="philosophy-scene">
      <img className="scene-bg philosophy-generated-bg" src="/assets/backgrounds/philosophy-notebook-generated.webp" alt="" loading="lazy" />
      <div className="philosophy-wash" aria-hidden="true" />
      <StoryCopy scene={scene} />
      <div className="belief-board">
        {beliefs.map(([conventional, sridhar], index) => (
          <button key={conventional} className={active === index ? 'belief-pair active' : 'belief-pair'} type="button" onClick={() => setActive(index)}>
            <span>{conventional}</span>
            <i />
            <strong>{sridhar}</strong>
          </button>
        ))}
      </div>
      <aside className={`philosophy-visual visual-${active}`} aria-live="polite">
        <span>{visual.kicker}</span>
        <h3>{visual.title}</h3>
        <div className="visual-diagram" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, index) => (
            <i key={index} />
          ))}
        </div>
        <p>{visual.note}</p>
      </aside>
      <div className="seed-clock" aria-hidden="true" />
    </SceneFrame>
  )
}
