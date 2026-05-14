import type { CSSProperties } from 'react'
import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

const productClusters = [
  ['CRM', 'Desk', 'Campaigns'],
  ['Books', 'Invoice', 'Payroll'],
  ['Mail', 'Cliq', 'WorkDrive'],
  ['People', 'Recruit', 'Learn'],
  ['Analytics', 'Creator', 'Flow'],
  ['ManageEngine', 'Assist', 'Vault'],
]

export default function BuildNotBuy({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="night-scene system-scene">
      <img className="scene-bg build-generated-bg" src="/assets/backgrounds/build-not-buy-generated.webp" alt="" loading="lazy" />
      <div className="system-backdrop" aria-hidden="true" />
      <StoryCopy scene={scene} />
      <div className="build-system-board" aria-label="Zoho product clusters">
        <div className="craft-seal">
          <span>In-house</span>
          <strong>built</strong>
        </div>
        <div className="product-chip-field">
          {productClusters.map((cluster, index) => (
            <article key={cluster[0]} style={{ '--cluster-index': index } as CSSProperties}>
              <span>{cluster[0]}</span>
              <small>{cluster.slice(1).join(' / ')}</small>
            </article>
          ))}
        </div>
        <div className="system-principles">
          <article>
            <strong>No buying spree</strong>
            <span>Identity stays inside the workshop.</span>
          </article>
          <article>
            <strong>No ad bargain</strong>
            <span>Users remain customers, not inventory.</span>
          </article>
        </div>
      </div>
    </SceneFrame>
  )
}
