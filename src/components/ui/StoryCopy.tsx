import type { SceneCopy } from '../../data/story'

type StoryCopyProps = {
  scene: SceneCopy
  align?: 'left' | 'center' | 'right'
  titleAs?: 'h1' | 'h2'
}

export default function StoryCopy({ scene, align = 'left', titleAs = 'h2' }: StoryCopyProps) {
  const Heading = titleAs

  return (
    <article className={`story-copy story-copy-${align}`}>
      <p className="scene-eyebrow">
        {scene.act} / {scene.eyebrow}
      </p>
      <Heading>{scene.title}</Heading>
      {scene.secondary && <p className="scene-secondary">{scene.secondary}</p>}
      <p>{scene.body}</p>
      {scene.quote && <blockquote>{scene.quote}</blockquote>}
      {scene.microcopy && <p className="microcopy">{scene.microcopy}</p>}
    </article>
  )
}
