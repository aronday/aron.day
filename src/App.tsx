import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Racing from './pages/Racing'
import Twitch from './pages/Twitch'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/racing" element={<Racing />} />
	  <Route path="/twitch" element={<Twitch />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
