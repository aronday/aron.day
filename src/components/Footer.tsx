import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-800">
      <div className="container px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-300">
        <div>built with ♥ in Dublin</div>
        <div className="text-neutral-500">© {new Date().getFullYear()} Aron Day</div>
      </div>
    </footer>
  )
}
