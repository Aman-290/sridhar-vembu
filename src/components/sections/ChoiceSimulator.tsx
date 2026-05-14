import { useState } from 'react'
import { motion } from 'framer-motion'
import SceneFrame from '../ui/SceneFrame'
import StoryCopy from '../ui/StoryCopy'
import type { SectionProps } from './types'

type Choice = 'vc' | 'slow'

export default function ChoiceSimulator({ scene }: SectionProps) {
  const [choice, setChoice] = useState<Choice>('slow')

  return (
    <SceneFrame scene={scene} className="pin-scene choice-scene">
      <img className="scene-bg choice-generated-bg" src="/assets/backgrounds/choice-decision-generated.webp" alt="" loading="lazy" />
      <div className="choice-wash" aria-hidden="true" />
      <StoryCopy scene={scene} align="center" />
      <div className="choice-board">
        <button className={choice === 'vc' ? 'path-card active vc-path' : 'path-card vc-path'} type="button" onClick={() => setChoice('vc')}>
          <span>Take the Money</span>
          <small>Board meetings, growth targets, exit timelines.</small>
        </button>
        <button className={choice === 'slow' ? 'path-card active slow-path' : 'path-card slow-path'} type="button" onClick={() => setChoice('slow')}>
          <span>Build Slowly</span>
          <small>Product by product. Customer by customer.</small>
        </button>
      </div>
      <motion.div className={`choice-outcome outcome-${choice}`} layout>
        {choice === 'vc' ? (
          <>
            <h3>The familiar path survives faster.</h3>
            <p>Then come the board meetings, growth targets, hiring pressure, exit timelines, and someone else’s definition of success.</p>
            <div className="cold-flow" aria-hidden="true" />
          </>
        ) : (
          <>
            <h3>The real path grows roots.</h3>
            <p>ManageEngine in 2002. Zoho.com in 2005. Product by product. Customer by customer. No permission required.</p>
            <img src="/assets/textures/roots-fiber-glow.png" alt="" loading="lazy" />
          </>
        )}
      </motion.div>
    </SceneFrame>
  )
}
