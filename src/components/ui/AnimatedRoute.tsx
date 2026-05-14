export default function AnimatedRoute() {
  return (
    <svg className="animated-route" viewBox="0 0 900 360" aria-hidden="true">
      <defs>
        <filter id="ink-bleed">
          <feTurbulence baseFrequency="0.018" numOctaves="2" seed="8" />
          <feDisplacementMap in="SourceGraphic" scale="2.4" />
        </filter>
      </defs>
      <path className="route-forward" d="M60 235 C150 115 265 120 350 188 S525 258 605 158 S730 62 842 130" />
      <path className="route-back" d="M842 130 C730 62 690 83 605 158 S435 260 350 188 S150 115 60 235" />
      <g className="route-icons">
        {['Village', 'Chennai', 'Princeton', 'San Diego', 'Valley', 'IPO', 'Exit'].map((label, index) => (
          <g key={label} transform={`translate(${64 + index * 128}, ${index % 2 ? 112 : 238})`}>
            <circle r="15" />
            <text y="38">{label}</text>
          </g>
        ))}
      </g>
      <g className="bicycle-wheel" transform="translate(160 234)">
        <circle r="36" />
        <circle r="5" />
        {Array.from({ length: 12 }).map((_, index) => (
          <line key={index} x1="0" y1="0" x2={Math.cos((index * Math.PI) / 6) * 35} y2={Math.sin((index * Math.PI) / 6) * 35} />
        ))}
      </g>
    </svg>
  )
}
