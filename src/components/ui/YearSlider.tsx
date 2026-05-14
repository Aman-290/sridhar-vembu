import { useMemo, useState } from 'react'
import { schoolMilestones } from '../../data/schools'

export default function YearSlider() {
  const [year, setYear] = useState(2005)
  const updateYear = (value: string) => setYear(Number(value))
  const milestone = useMemo(
    () => schoolMilestones.reduce((closest, item) => (Math.abs(item.year - year) < Math.abs(closest.year - year) ? item : closest)),
    [year],
  )
  const visible = Math.round(((year - 2005) / 20) * 66) + 6

  return (
    <div className="year-slider-panel">
      <div className="year-readout">
        <span>{year}</span>
        <strong>{milestone.label}</strong>
        <p>{milestone.copy}</p>
      </div>
      <label htmlFor="schools-year">Zoho Schools timeline</label>
      <input
        id="schools-year"
        type="range"
        min="2005"
        max="2025"
        step="1"
        value={year}
        aria-valuetext={`${year}: ${milestone.label}`}
        onInput={(event) => updateYear(event.currentTarget.value)}
        onChange={(event) => updateYear(event.currentTarget.value)}
      />
      <div className="cohort-grid" aria-hidden="true">
        {Array.from({ length: 78 }).map((_, index) => (
          <span key={index} className={index < visible ? 'is-lit' : ''} />
        ))}
      </div>
    </div>
  )
}
