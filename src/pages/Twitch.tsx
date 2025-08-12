import React from 'react'

const TWITCH_CHANNEL = 'dayzerracing'

const PARENTS = [
  'localhost',
  '127.0.0.1',
  'aron.day',
]

const parentsParam = PARENTS.map(p => `parent=${encodeURIComponent(p)}`).join('&')

export default function Twitch() {
  return (
    <div>
      {/* Hero section with Twitch gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9146FF] via-[#A970FF] to-[#B9A3E3]" />
        <div className="absolute inset-0 bg-checkers mix-blend-overlay opacity-20" />

        <div className="relative container px-4 py-16 flex items-center gap-4">
          {/* 95 badge */}
          <img
            src="/95_1.png"
            alt="Number 95"
            className="h-12 w-12 object-contain drop-shadow-lg"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Live on Twitch
            </h1>
            <p className="mt-2 max-w-2xl text-white/90">
              Catch my streams — sim racing, tech, and the occasional chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="min-h-[70vh] container px-4 py-8">
        {/* Player + Chat (responsive) */}
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr,360px]">
          {/* Player */}
          <div className="aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-black">
            <iframe
              src={`https://player.twitch.tv/?channel=${encodeURIComponent(TWITCH_CHANNEL)}&${parentsParam}&muted=false&autoplay=false`}
              allowFullScreen
              scrolling="no"
              frameBorder="0"
              title="Twitch Player"
              className="w-full h-full"
            />
          </div>

          {/* Chat (hidden on small screens) */}
          <div className="hidden md:block rounded-xl overflow-hidden border border-neutral-800 bg-black">
            <iframe
              src={`https://www.twitch.tv/embed/${encodeURIComponent(TWITCH_CHANNEL)}/chat?${parentsParam}`}
              frameBorder="0"
              scrolling="no"
              title="Twitch Chat"
              className="w-full h-[340px]"
            />
          </div>
        </div>

        {/* Simple schedule / links */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
            <h2 className="text-white font-semibold">Schedule</h2>
            <p className="text-neutral-300 text-sm mt-2">
              I stream most weeks — race practice, setup tinkering, and casual hangs.
            </p>
            <ul className="text-neutral-300 text-sm mt-3 space-y-1">
              <li>• Weeknights, ~8pm Dublin time</li>
              <li>• Race weekends: ad-hoc streams</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
            <h2 className="text-white font-semibold">Follow</h2>
            <p className="text-neutral-300 text-sm mt-2">
              Hit follow to get notified when I go live — and drop your setup tips in chat!
            </p>
            <a
              href={`https://twitch.tv/${encodeURIComponent(TWITCH_CHANNEL)}`}
              target="_blank"
              className="mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-white shadow-speed"
              style={{ backgroundColor: '#9146FF' }}
            >
              Follow on Twitch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
