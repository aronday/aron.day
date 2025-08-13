// src/pages/Racing.tsx
import React, { useState, useEffect } from 'react'
import { Mail, Car, Zap } from 'lucide-react'

const PROFILE = { email: 'hello@aron.day' }
const GALLERY = [
  { src: '/car_1.jpg', alt: 'Global Lights car on track' },
  { src: '/car_2.jpg', alt: 'Paddock shot' },
  { src: '/car_3.jpg', alt: 'Lightning livery close-up' },
  { src: '/car_4.jpg', alt: 'Car at display event' },
]

const SPONSORS = [
  {
    name: 'Aim Technologies',
    logo: '/sponsors/sponsor1.png',   // put files in /public/sponsors/
    url: 'https://www.aimtechnologies.com/',
    grayscale: true,                  // show in greyscale (hover reveals color)
  },
  {
    name: 'Precision Graphics',
    logo: '/sponsors/sponsor2.png',
    url: 'https://precisiongraphics.ie',
    grayscale: true,
  },
]

function Lightbox({
  image,
  onClose,
}: {
  image: { src: string; alt: string } | null
  onClose: () => void
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-neutral-300 hover:text-white text-sm"
          aria-label="Close"
        >
          Close ✕
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto rounded-xl border border-neutral-700 shadow-2xl"
        />
      </div>
    </div>
  )
}

export default function Racing() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div>
      {/* HERO */}
     <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-amber-500" />
      <div className="absolute inset-0 bg-checkers mix-blend-overlay opacity-30" />

      {/* show only on md+ so it won't overlap on phones */}
      <div className="hidden md:block absolute top-6 right-6">
        <img
          src="/series-logo.png"
          alt="Global Lights Series Logo"
          className="h-40 w-auto object-contain drop-shadow-lg"
        />
      </div>

      <div className="relative container px-4 py-16">
        <div className="flex items-center gap-3 text-white/90">
          <Zap className="h-8 w-8" />
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Racing</h1>
        </div>
        <p className="mt-2 max-w-2xl text-white/90">
          I race in Ireland’s Global GT Light series, my car isn’t just quick — it’s Ka-chow! quick.
          Built for speed, built for smiles.
        </p>
      </div>

      <div className="absolute -bottom-16 -right-16 rotate-12">
        <div className="h-40 w-[140vw] bg-gradient-to-r from-amber-400 to-yellow-200 opacity-30 blur-2xl" />
      </div>
    </section>

      {/* CAR & SERIES */}
      <section className="container px-4 py-10 grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-white font-semibold flex items-center gap-2">
  <img
    src="/95_1.png"
    alt="Number 95"
    className="h-5 w-5 object-contain"
  />
  The Car
</h3>
<p className="text-sm text-neutral-300 mt-2">
  Meet my pride and joy: a Lightning McQueen–inspired Global GT Light Racecar.  
  As a Disney adult, choosing McQueen was a no-brainer — it’s bright, bold, and gets smiles (and a few “Ka-chows!”) everywhere it goes.
</p>
        </div>
        <div className="card">
          <h3 className="text-white font-semibold">The Series</h3>
          <p className="text-sm text-neutral-300 mt-2">
            Global Lights is a spec prototype series focused on momentum and racecraft across Irish circuits
            like Mondello Park. It’s close, clean, and seriously addictive racing — for drivers and spectators alike.
          </p>
        </div>
      </section>

      {/* SPEC SHEET */}
      <section className="container px-4">
        <div className="rounded-2xl border border-amber-400/40 bg-neutral-900/70 p-6 shadow-speed relative overflow-hidden">
          <div className="absolute inset-0 bg-checkers opacity-10 pointer-events-none" />
          <div className="relative">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-300" /> Spec Sheet — Global Lights GT1 (Lightning Edition)
            </h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm text-neutral-200">
              <div>
                <p className="font-medium text-neutral-100">Dimensions</p>
                <ul className="mt-1 space-y-1">
                  <li><strong>Weight:</strong> 390 kg</li>
                  <li><strong>Length:</strong> 3,520 mm</li>
                  <li><strong>Width:</strong> 1,420 mm</li>
                  <li><strong>Height:</strong> 1,030 mm</li>
                  <li><strong>Wheelbase:</strong> 2,000 mm</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-neutral-100">Powertrain</p>
                <ul className="mt-1 space-y-1">
                  <li><strong>Engine:</strong> Yamaha 600 cc Carb Bike Engine</li>
                  <li><strong>Sound:</strong> Glorious</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="container px-4 py-10">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
          <h3 className="text-white font-semibold">Partners & Sponsors</h3>
          <p className="text-sm text-neutral-400 mt-1">
            Huge thanks to the partners who help keep the wheels turning.
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {SPONSORS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 hover:bg-neutral-900/60 transition"
                aria-label={s.name}
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className={[
                    "max-h-12 w-auto object-contain transition",
                    s.grayscale
                      ? "grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                      : ""
                  ].join(" ")}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HIRE CTA */}
      <section className="container px-4 py-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-700 to-red-500 p-6 shadow">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr,240px] gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Car className="h-5 w-5" /> Hire the Car for Display
              </h3>
              <p className="mt-1 text-white/90">
               Add the Lightning McQueen–inspired Global GT Light Racecar to your event as a show-stopping display.
Perfect for shows, fundraisers, and fan gatherings — guaranteed to bring smiles and a little “Ka-chow!”.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
                <Mail className="h-4 w-4" /> Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY with hover pop + lightbox */}
      <section className="container px-4 pb-12">
        <h3 className="text-white font-semibold">Gallery</h3>
        <p className="text-sm text-neutral-400 mt-1">Track shots, paddock moments, and the livery up close.</p>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.map((img) => (
            <button
              key={img.src}
              onClick={() => setActive(img)}
              className="group overflow-hidden rounded-xl border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-video w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>

        <Lightbox image={active} onClose={() => setActive(null)} />
      </section>
    </div>
  )
}
