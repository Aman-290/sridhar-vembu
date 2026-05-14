import { useState } from 'react'
import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import TornPaper from '../ui/TornPaper'
import type { SectionProps } from './types'

const facts = [
  { id: 'vc', title: 'No VC.', body: 'Personal savings. No investor script. No boardroom permission.' },
  { id: 'snmp', title: 'No mythology.', body: 'The first product was SNMP network management software for telecom vendors.' },
  { id: 'question', title: 'The founding question.', body: 'Why does India export so much talent, but build so few global technology powerhouses at home?' },
]

export default function TradeShowBooth({ scene }: SectionProps) {
  const [active, setActive] = useState(facts[0])

  return (
    <SceneFrame scene={scene} className="image-scene booth-scene">
      <img className="scene-bg booth-bg" data-parallax data-speed="-9" src="/assets/backgrounds/silicon-valley-dusk.webp" alt="" loading="lazy" />
      <div className="booth-floor" />
      <img className="cutout booth-person" data-cursor="badge" src="/assets/cutouts/young-sridhar-booth-cutout.png" alt="Stylized young founder at a trade show booth" loading="lazy" />
      <div className="badge-swing" data-cursor="badge">ADVENTNET<br />1996</div>
      <div className="booth-facts" aria-label="Founding facts">
        {facts.map((fact) => (
          <button key={fact.id} type="button" onClick={() => setActive(fact)} onFocus={() => setActive(fact)}>
            {fact.title}
          </button>
        ))}
        <TornPaper tone="paper">
          <strong>{active.title}</strong>
          <p>{active.body}</p>
        </TornPaper>
      </div>
      <StoryCopy scene={scene} />
    </SceneFrame>
  )
}
