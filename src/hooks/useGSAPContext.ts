import { RefObject, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export function useGSAPContext<T extends HTMLElement>(
  ref: RefObject<T | null>,
  setup: () => void,
  disabled = false,
) {
  useLayoutEffect(() => {
    if (disabled || !ref.current) return
    const ctx = gsap.context(setup, ref)
    return () => ctx.revert()
  }, [disabled, ref, setup])
}
