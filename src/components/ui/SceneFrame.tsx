import type { PropsWithChildren } from 'react'
import type { SceneCopy } from '../../data/story'

type SceneFrameProps = PropsWithChildren<{
  scene: SceneCopy
  className?: string
  density?: 'normal' | 'compact' | 'wide'
}>

export default function SceneFrame({ scene, className = '', density = 'normal', children }: SceneFrameProps) {
  return (
    <section className={`scene scene-${scene.id} scene-${density} ${className}`} data-scene={scene.id}>
      {children}
    </section>
  )
}
