import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom';

const PROFILE = {
  name: "Aron Day",
  title: "Customer Success Engineer @ Tines",
  location: "Dublin, Ireland",
  email: "hello@aron.day",
  linkedin: "https://www.linkedin.com/in/aronday",
  github: "https://github.com/aronday",
  hero: "/purple_bg.png",
  headshot: "/aron.jpg",
}

export default function Home() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] max-h-[720px] flex items-center overflow-hidden">
  <img
    src={PROFILE.hero}
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
  <div className="relative container px-4">
    <div className="max-w-xl">
      <p className="text-purple-400 text-sm mb-1">Howya, I’m Aron!</p>
      <h1 className="text-3xl md:text-4xl font-extrabold text-white">
        Customer Success Engineer @ Tines
      </h1>
      <p className="text-neutral-300 mt-2">
        By day I help customers turn ideas into automations that actually work — building stories,
        sharing best practices, and being the friendly “why are we doing this?” voice when needed.
      </p>
      <p className="text-neutral-300 mt-2">
        I’ve worn more hats than a paddock full of race fans: Help Desk, SysAdmin, DevOps, SRE, Sales Engineer.
        My philosophy: keep it simple, solve the right problems, and appreciate a well-timed GIF.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">
          <Mail className="h-4 w-4" /> Email me
        </a>
        <a href={PROFILE.linkedin} target="_blank" className="btn btn-ghost">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a href={PROFILE.github} target="_blank" className="btn btn-ghost">
          <Github className="h-4 w-4" /> GitHub
        </a>
	  <Link
        to="/racing"
        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white shadow-speed"
        style={{ backgroundColor: '#D22630' }}
      >
        <img
          src="/95_1.png"
          alt="Number 95"
          className="h-5 w-5 object-contain"
        />
        Looking for Lightning?
      </Link>
      </div>
    </div>
  </div>
</section>

      <section className="container px-4 py-10 grid gap-6 md:grid-cols-[180px,1fr] items-start">
        <img src={PROFILE.headshot} alt="Aron" className="h-40 w-40 rounded-2xl object-cover border border-neutral-800" />
        <div>
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-neutral-300 mt-2">
            Outside of work, you’ll usually find me sim racing, scuba diving, or geeking out over motorsport —
            I even used to cover Formula 1 as a journalist, which meant I got paid to argue about tyres.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="tag">Automation</span>
            <span className="tag">Customer Success</span>
            <span className="tag">DevOps</span>
            <span className="tag">Systems Thinking</span>
          </div>
        </div>
      </section>
    </div>
  )
}
