import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import TornPaper from '../ui/TornPaper'
import type { SectionProps } from './types'

export default function OriginRank({ scene }: SectionProps) {
  return (
    <SceneFrame scene={scene} className="image-scene origin-scene">
      <img className="scene-bg desk-bg" data-parallax data-speed="-10" src="/assets/backgrounds/scrapbook-desk-origin.webp" alt="" loading="lazy" />
      <img className="paper-rank" src="/assets/objects/iit-rank-paper.png" alt="" loading="lazy" />
      <div className="rank-monument" aria-label="All India Rank 27">27</div>
      <TornPaper className="origin-map">
        <span>Thanjavur</span>
        <i />
        <span>Chennai</span>
      </TornPaper>
      <StoryCopy scene={scene} />
    </SceneFrame>
  )
}
