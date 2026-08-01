import { useEffect, useRef, useState } from 'react'
import { farmLog } from '../data/profile'

const COLS = 6
const ROWS = 4
const CELL_COUNT = COLS * ROWS
const STATES = ['idle', 'testing', 'online']

function randomState() {
  // Weighted so most cells sit idle/online, a few are "testing" at any moment —
  // mirrors a device farm where most units are parked and a handful are mid-job.
  const r = Math.random()
  if (r < 0.55) return 'idle'
  if (r < 0.8) return 'online'
  return 'testing'
}

function initialCells() {
  return Array.from({ length: CELL_COUNT }, (_, i) => ({ id: i, state: randomState() }))
}

// The portfolio's signature element: a small live-looking grid modeled directly
// on the "Remote Device Farm" project — devices flicker between idle / testing /
// online, with a scrolling log line underneath. Freezes politely for
// prefers-reduced-motion instead of disabling itself entirely.
export default function DeviceFarmGrid() {
  const [cells, setCells] = useState(initialCells)
  const [logIndex, setLogIndex] = useState(0)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion.current) return

    const cellTimer = setInterval(() => {
      setCells((prev) => {
        const next = [...prev]
        // flip a small random handful of cells each tick, staggered
        const flips = 1 + Math.floor(Math.random() * 3)
        for (let i = 0; i < flips; i++) {
          const idx = Math.floor(Math.random() * CELL_COUNT)
          const current = next[idx].state
          const options = STATES.filter((s) => s !== current)
          next[idx] = { ...next[idx], state: options[Math.floor(Math.random() * options.length)] }
        }
        return next
      })
    }, 900)

    const logTimer = setInterval(() => {
      setLogIndex((i) => (i + 1) % farmLog.length)
    }, 2400)

    return () => {
      clearInterval(cellTimer)
      clearInterval(logTimer)
    }
  }, [])

  return (
    <div className="farm">
      <div className="farm-header">
        <span className="farm-title">remote-device-farm</span>
        <span className="farm-count">
          <span className="dot dot-online" /> {cells.filter((c) => c.state === 'online').length} online
        </span>
      </div>

      <div className="farm-grid" role="img" aria-label="Animated visualization of a device farm dashboard">
        {cells.map((cell) => (
          <div key={cell.id} className={`farm-cell farm-cell-${cell.state}`}>
            <span className="farm-cell-dot" />
          </div>
        ))}
      </div>

      <div className="farm-log">
        <span className="farm-log-caret">›</span>
        <span className="farm-log-text" key={logIndex}>
          {farmLog[logIndex]}
        </span>
      </div>
    </div>
  )
}
