import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import { stats } from '../../data/story'
import type { SectionProps } from './types'

export default function MathOfRefusal({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="ledger-scene">
      <img className="scene-bg ledger-generated-bg" src="/assets/backgrounds/math-ledger-generated.webp" alt="" loading="lazy" />
      <div className="ledger-wash" aria-hidden="true" />
      <StoryCopy scene={scene} align="center" />
      <div className="ledger-page">
        {stats.map((stat, index) => (
          <article key={stat.label} style={{ transitionDelay: `${index * 100}ms` }}>
            <strong>{stat.label}</strong>
            <span>{stat.detail}</span>
          </article>
        ))}
        <div className="bootstrapped-seal">Bootstrapped</div>
      </div>
    </SceneFrame>
  )
}
