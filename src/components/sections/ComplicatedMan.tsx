import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

export default function ComplicatedMan({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="newspaper-scene">
      <StoryCopy scene={scene} />
      <div className="newspaper-columns">
        <article>
          <h3>What is undeniable</h3>
          <ul>
            <li>Built one of India’s most important software companies.</li>
            <li>Refused venture capital and IPO pressure.</li>
            <li>Invested deeply in rural talent.</li>
            <li>Created alternative pathways into technology.</li>
          </ul>
        </article>
        <article>
          <h3>What is contested</h3>
          <ul>
            <li>His political associations have drawn criticism.</li>
            <li>Former employees and observers have raised concerns over ideological climate.</li>
            <li>Personal legal disputes have entered public reporting.</li>
          </ul>
        </article>
        <p className="editorial-note">
          This section does not exist to diminish the work. It exists because adults do not need their heroes flattened.
        </p>
      </div>
    </SceneFrame>
  )
}
