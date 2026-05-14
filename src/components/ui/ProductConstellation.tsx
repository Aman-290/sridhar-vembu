import { useMemo, useState } from 'react'
import { productNodes } from '../../data/products'

const clusterColor = {
  Sales: '#ff9966',
  Finance: '#c9a84c',
  HR: '#f0ebe0',
  IT: '#a8b0c2',
  Collaboration: '#5a9e3a',
  Analytics: '#a33a2a',
}

export default function ProductConstellation() {
  const [active, setActive] = useState<string>('Sales')
  const nodes = useMemo(
    () =>
      productNodes.map((product, index) => {
        const ring = 90 + (index % 5) * 34
        const angle = index * 2.399
        return {
          ...product,
          x: 50 + Math.cos(angle) * (ring / 6),
          y: 50 + Math.sin(angle) * (ring / 7),
        }
      }),
    [],
  )

  return (
    <div className="constellation" data-cursor="seed">
      <svg viewBox="0 0 100 100" role="img" aria-label="Zoho products shown as a constellation">
        {nodes.slice(0, 36).map((node, index) => {
          const next = nodes[(index + 7) % nodes.length]
          return <line key={`${node.name}-${next.name}`} x1={node.x} y1={node.y} x2={next.x} y2={next.y} />
        })}
        {nodes.map((node) => (
          <button
            key={node.name}
            className={active === node.cluster ? 'constellation-node active' : 'constellation-node'}
            style={{ left: `${node.x}%`, top: `${node.y}%`, color: clusterColor[node.cluster] }}
            onClick={() => setActive(node.cluster)}
            onFocus={() => setActive(node.cluster)}
            aria-label={`${node.name}, ${node.cluster}`}
            type="button"
          >
            <span />
          </button>
        ))}
      </svg>
      <div className="constellation-label">
        <span>{active}</span>
        <p>{productNodes.filter((node) => node.cluster === active).map((node) => node.name).join(' / ')}</p>
      </div>
    </div>
  )
}
