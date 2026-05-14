import { useEffect, useRef } from 'react'
import { sceneSections } from './data/story'
import { useLenis } from './hooks/useLenis'
import { useReducedMotion } from './hooks/useReducedMotion'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import GrainOverlay from './components/ui/GrainOverlay'
import InitialLoader from './components/ui/InitialLoader'
import PrologueArrow from './components/sections/PrologueArrow'
import HeroSoil from './components/sections/HeroSoil'
import OriginRank from './components/sections/OriginRank'
import DeparturePlane from './components/sections/DeparturePlane'
import TradeShowBooth from './components/sections/TradeShowBooth'
import Crash from './components/sections/Crash'
import ChoiceSimulator from './components/sections/ChoiceSimulator'
import BuildNotBuy from './components/sections/BuildNotBuy'
import ZohoEcosystem from './components/sections/ZohoEcosystem'
import ZohoSchools from './components/sections/ZohoSchools'
import TheReturn from './components/sections/TheReturn'
import Philosophy from './components/sections/Philosophy'
import ComplicatedMan from './components/sections/ComplicatedMan'
import MathOfRefusal from './components/sections/MathOfRefusal'
import Finale from './components/sections/Finale'

const sections = [
  PrologueArrow,
  HeroSoil,
  OriginRank,
  DeparturePlane,
  TradeShowBooth,
  Crash,
  ChoiceSimulator,
  BuildNotBuy,
  ZohoEcosystem,
  ZohoSchools,
  TheReturn,
  Philosophy,
  ComplicatedMan,
  MathOfRefusal,
  Finale,
]

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const verticalReadScenes = new Set(['schools', 'philosophy', 'math'])
const verticalLiftByScene: Record<string, { copy: number; visual: number }> = {
  schools: { copy: 130, visual: 260 },
  philosophy: { copy: 145, visual: 260 },
  math: { copy: 120, visual: 220 },
}

const transitionModes = ['fade', 'horizontal', 'diagonal', 'fade', 'drop', 'horizontal', 'rise', 'diagonal', 'fade', 'rise', 'diagonal', 'fade', 'drop', 'horizontal'] as const
type TransitionMode = (typeof transitionModes)[number]
const easeTransition = (value: number) => {
  const p = clamp(value)
  return p * p * (3 - 2 * p)
}

const panelTransform = (mode: TransitionMode, role: 'current' | 'next', progress: number) => {
  const p = easeTransition(progress)
  if (role === 'next') {
    const distance = 1 - p
    if (mode === 'rise') return `translate3d(0, ${distance * 72}vh, 0) scale(${0.985 + p * 0.015})`
    if (mode === 'drop') return `translate3d(0, ${distance * -72}vh, 0) scale(${0.985 + p * 0.015})`
    if (mode === 'diagonal') return `translate3d(${distance * 44}vw, ${distance * 30}vh, 0) scale(${0.985 + p * 0.015})`
    if (mode === 'fade') return `translate3d(0, 0, 0) scale(${0.975 + p * 0.025})`
    return `translate3d(${distance * 74}vw, 0, 0) scale(${0.985 + p * 0.015})`
  }

  if (mode === 'rise') return `translate3d(0, ${p * -12}vh, 0) scale(${1 - p * 0.018})`
  if (mode === 'drop') return `translate3d(0, ${p * 12}vh, 0) scale(${1 - p * 0.018})`
  if (mode === 'diagonal') return `translate3d(${p * -12}vw, ${p * -8}vh, 0) scale(${1 - p * 0.018})`
  if (mode === 'fade') return `translate3d(0, 0, 0) scale(${1 - p * 0.025})`
  return `translate3d(${p * -16}vw, 0, 0) scale(${1 - p * 0.016})`
}

function App() {
  const rootRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const reducedMotion = useReducedMotion()
  useLenis(!reducedMotion)

  useEffect(() => {
    if (reducedMotion) return

    const root = rootRef.current
    const track = trackRef.current
    if (!root || !track) return

    const panels = Array.from(track.querySelectorAll<HTMLElement>(':scope > .scene'))
    const segment = 1750
    const mobileQuery = window.matchMedia('(max-width: 980px)')
    let frame = 0
    let activePanel: HTMLElement | null = panels[0] ?? null

    const sizePage = () => {
      if (mobileQuery.matches) {
        root.style.minHeight = ''
        track.style.transform = ''
        return
      }
      root.style.minHeight = `${window.innerHeight + panels.length * segment}px`
    }

    const setElementState = (element: HTMLElement, progress: number, index: number, lift = 48) => {
      const reveal = clamp(progress / 0.36)
      const read = clamp((progress - 0.36) / 0.48)
      const side = index % 2 === 0 ? 1 : -1
      element.style.opacity = String(reveal)
      const baseX = (1 - reveal) * side * 64
      const baseY = (1 - reveal) * 42 - read * lift
      element.style.transform = `translate3d(${baseX}px, ${baseY}px, 0)`
    }

    const update = () => {
      if (mobileQuery.matches) {
        track.style.transform = ''
        panels.forEach((panel) => {
          panel.style.removeProperty('--mx')
          panel.style.removeProperty('--my')
          panel.querySelectorAll<HTMLElement>('.story-copy *, .cutout, .year-slider-panel, .choice-board, .choice-outcome, .ledger-page, .newspaper-columns, .constellation, .booth-facts, .data-cards, .belief-board, .firefly-wall, .site-footer').forEach((piece) => {
            piece.style.opacity = ''
            piece.style.transform = ''
          })
        })
        return
      }

      const maxIndex = panels.length - 1
      const raw = window.scrollY / segment
      const index = Math.min(maxIndex, Math.floor(raw))
      const local = clamp(raw - index)
      const transitionStart = index === 0 ? 0 : 0.58
      const transitionProgressRaw = index === maxIndex ? 0 : clamp((local - transitionStart) / (1 - transitionStart))
      const transitionProgress = easeTransition(transitionProgressRaw)
      const mode = transitionModes[index % transitionModes.length]

      activePanel = panels[index] ?? null
      track.style.transform = ''

      panels.forEach((panel, panelIndex) => {
        const active = panelIndex === index
        const past = panelIndex < index
        const incoming = panelIndex === index + 1 && transitionProgress > 0
        const panelProgress = active ? local : past ? 1 : 0
        const sceneId = panel.dataset.scene ?? ''
        const needsVerticalRead = verticalReadScenes.has(sceneId)
        const lift = verticalLiftByScene[sceneId] ?? { copy: 0, visual: 0 }
        const copyPieces = Array.from(
          panel.querySelectorAll<HTMLElement>('.story-copy .scene-eyebrow, .story-copy h1, .story-copy h2, .story-copy p, .story-copy blockquote'),
        )
        const visualPieces = Array.from(
          panel.querySelectorAll<HTMLElement>(
            '.cutout, .year-slider-panel, .choice-board, .choice-outcome, .ledger-page, .newspaper-columns, .constellation, .booth-facts, .paper-rank, .rank-monument, .origin-map, .airplane-window, .boarding-pass, .ocean-route, .crt-monitor, .term-sheets, .crash-graph, .data-cards, .belief-board, .philosophy-visual, .seed-clock, .firefly-wall, .site-footer, .zoho-proof-cards, .zoho-mark, .return-route, .return-bike, .return-stamps, .return-note, .return-compass, .build-system-board, .craft-seal, .system-principles',
          ),
        ).filter((piece) => piece.dataset.fixedVisual !== 'true')

        if (active) {
          panel.style.opacity = mode === 'fade' ? String(1 - transitionProgress) : String(1 - transitionProgress * 0.42)
          panel.style.pointerEvents = 'auto'
          panel.style.zIndex = '3'
          panel.style.transform = panelTransform(mode, 'current', transitionProgressRaw)
        } else if (incoming) {
          panel.style.opacity = mode === 'fade' ? String(transitionProgress) : String(0.12 + transitionProgress * 0.88)
          panel.style.pointerEvents = 'none'
          panel.style.zIndex = '4'
          panel.style.transform = panelTransform(mode, 'next', transitionProgressRaw)
        } else {
          panel.style.opacity = '0'
          panel.style.pointerEvents = 'none'
          panel.style.zIndex = '1'
          panel.style.transform = 'translate3d(0, 0, 0)'
        }

        if (panelIndex === 0) {
          copyPieces.forEach((piece) => {
            piece.style.opacity = '1'
            piece.style.transform = 'translate3d(0, 0, 0)'
          })
          return
        }

        copyPieces.forEach((piece, pieceIndex) => {
          const delayed = clamp((panelProgress - pieceIndex * 0.025) / 0.9)
          setElementState(piece, delayed, pieceIndex, needsVerticalRead ? lift.copy : 0)
        })

        visualPieces.forEach((piece, pieceIndex) => {
          const delayed = clamp((panelProgress - 0.08 - pieceIndex * 0.018) / 0.82)
          setElementState(piece, delayed, pieceIndex, needsVerticalRead ? lift.visual : 0)
        })
      })
    }

    const requestUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    sizePage()
    update()
    window.addEventListener('resize', sizePage)
    window.addEventListener('resize', requestUpdate)
    window.addEventListener('scroll', requestUpdate, { passive: true })

    const handlePointerMove = (event: PointerEvent) => {
      if (!activePanel) return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      activePanel.style.setProperty('--mx', x.toFixed(3))
      activePanel.style.setProperty('--my', y.toFixed(3))
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', sizePage)
      window.removeEventListener('resize', requestUpdate)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('pointermove', handlePointerMove)
      root.style.minHeight = ''
      track.style.transform = ''
    }
  }, [reducedMotion])

  return (
    <main ref={rootRef} className={reducedMotion ? 'site-shell is-reduced' : 'site-shell'}>
      <InitialLoader />
      <ScrollProgress />
      <CustomCursor />
      <GrainOverlay />
      <div className="horizontal-stage">
        <div ref={trackRef} className="horizontal-track">
          {sections.map((Section, index) => (
            <Section key={sceneSections[index].id} scene={sceneSections[index]} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
