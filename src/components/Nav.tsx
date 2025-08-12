import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { hash } = useLocation()
  const current = hash || '#/'
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-neutral-900/40">
      <div className="container px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-red-800 flex items-center justify-center overflow-hidden">
  <img
    src="/95_1.png"
    alt="Race number 95"
    className="h-5 w-5 object-contain"
  />
</div>
          <span className="font-semibold">Aron Day</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-neutral-300">
          <Link to="/" className={current === '#/' ? 'text-white' : 'hover:text-white'}>Home</Link>
          <Link to="/racing" className={current.startsWith('#/racing') ? 'text-white' : 'hover:text-white'}>Racing</Link>
	  <Link to="/twitch" className={current.startsWith('#/twitch') ? 'text-white' : 'hover:text-white'}>Twitch</Link>
        </nav>
      </div>
    </header>
  )
}
