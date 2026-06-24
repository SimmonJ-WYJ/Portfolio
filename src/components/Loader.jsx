import { useEffect, useRef, useState } from 'react'

// Intro loader: a 0→100 counter with a word reveal, then the curtain lifts away.
// Deterministic timing (no reliance on animation callbacks) so it never gets stuck.
export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const [lift, setLift] = useState(false)
  const finished = useRef(false)

  useEffect(() => {
    let n = 0
    let timer
    const timers = []
    const tick = () => {
      n += Math.floor(Math.random() * 8) + 4
      if (n >= 100) {
        setCount(100)
        // hold a beat at 100, lift the curtain, then notify when it's off-screen
        timers.push(setTimeout(() => setLift(true), 450))
        timers.push(setTimeout(() => {
          if (!finished.current) {
            finished.current = true
            onDone()
          }
        }, 450 + 1000))
        return
      }
      setCount(n)
      timer = setTimeout(tick, 90 + Math.random() * 110)
    }
    timer = setTimeout(tick, 200)
    return () => {
      clearTimeout(timer)
      timers.forEach(clearTimeout)
    }
  }, [onDone])

  return (
    <div
      className="loader"
      style={{
        transform: lift ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 1s cubic-bezier(0.76, 0, 0.24, 1)',
      }}
    >
      <div className="loader-word">
        {'PORTFOLIO'.split('').map((c, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              transform: 'translateY(110%)',
              animation: `loaderUp .7s cubic-bezier(0.33,1,0.68,1) ${0.1 + i * 0.04}s forwards`,
            }}
          >
            {c === ' ' ? ' ' : c}
          </span>
        ))}
      </div>
      <div className="loader-count">{String(count).padStart(3, '0')}</div>
    </div>
  )
}
