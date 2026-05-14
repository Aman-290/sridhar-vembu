import type { PropsWithChildren } from 'react'

type TornPaperProps = PropsWithChildren<{
  className?: string
  tone?: 'paper' | 'dark' | 'red'
}>

export default function TornPaper({ children, className = '', tone = 'paper' }: TornPaperProps) {
  return <div className={`torn-paper torn-paper-${tone} ${className}`}>{children}</div>
}
