import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import ProductConstellation from '../ui/ProductConstellation'
import { stats } from '../../data/story'
import type { SectionProps } from './types'

export default function ZohoEcosystem({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="image-scene zoho-scene">
      <img className="scene-bg zoho-bg" src="/assets/backgrounds/zoho-ecosystem-generated.webp" alt="" loading="lazy" />
      <div className="zoho-mark" aria-label="Zoho">ZOHO</div>
      <StoryCopy scene={scene} />
      <ProductConstellation />
      <div className="zoho-proof-cards">
        {stats.slice(0, 4).map((stat) => (
          <article key={stat.label}>
            <strong>{stat.label}</strong>
            <span>{stat.detail}</span>
          </article>
        ))}
      </div>
    </SceneFrame>
  )
}
