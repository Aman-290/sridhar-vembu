import { FormEvent, useEffect, useMemo, useState } from 'react'

type Thought = {
  id: string
  text: string
}

const storageKey = 'sridhar-vembu-field-thoughts'

export default function FireflyWall() {
  const [thoughts, setThoughts] = useState<Thought[]>(() => {
    const stored = window.localStorage.getItem(storageKey)
    return stored ? (JSON.parse(stored) as Thought[]) : []
  })
  const [message, setMessage] = useState('')
  const [special, setSpecial] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(thoughts.slice(-18)))
  }, [thoughts])

  const particles = useMemo(
    () =>
      thoughts.map((thought, index) => ({
        ...thought,
        left: 10 + ((index * 19) % 78),
        top: 16 + ((index * 31) % 44),
        delay: (index % 7) * 0.27,
      })),
    [thoughts],
  )

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = message.trim().slice(0, 80)
    if (!trimmed) return
    setSpecial(trimmed.toLowerCase() === 'opposite direction')
    setThoughts((current) => [...current, { id: crypto.randomUUID(), text: trimmed }])
    setMessage('')
  }

  return (
    <div className="firefly-wall" data-cursor="seed">
      <div className="firefly-sky" aria-live="polite">
        {particles.map((thought) => (
          <span
            key={thought.id}
            className="thought-firefly"
            style={{ left: `${thought.left}%`, top: `${thought.top}%`, animationDelay: `${thought.delay}s` }}
          >
            <em>{thought.text}</em>
          </span>
        ))}
      </div>
      <form onSubmit={submit} className="thought-form">
        <label htmlFor="field-thought">Leave a thought in the field</label>
        <div>
          <input
            id="field-thought"
            value={message}
            maxLength={80}
            placeholder="Leave a thought in the field..."
            onChange={(event) => setMessage(event.target.value)}
          />
          <button type="submit">Release</button>
        </div>
        {special && <p className="easter-egg">That’s the one.</p>}
      </form>
    </div>
  )
}
