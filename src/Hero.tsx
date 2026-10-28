import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { layers, profile } from './data'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const slabs = gsap.utils.toArray<HTMLElement>('.slab')
      gsap.set(slabs, { z: (i: number) => i * 60 })
      // The one orchestrated entrance: headline lines rise, layers fade in.
      gsap.from('.hero-line', { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: 0.12 })
      gsap.from(slabs, { opacity: 0, duration: 1.4, stagger: 0.18, delay: 0.2 })
      if (reduce) return
      // Scroll turns the stack a full 360 degrees while the layers pull apart.
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: '+=1800', scrub: 1, pin: true, anticipatePin: 1 }
      })
      tl.to('.rig', { rotationZ: 360, duration: 1, ease: 'none' }, 0)
        .to(slabs, { z: (i: number) => i * 140, duration: 1, ease: 'none' }, 0)
        .to('.hero-copy', { opacity: 0.25, duration: 0.3, ease: 'none' }, 0.5)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <header ref={root} className="relative h-screen min-h-[640px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(111,168,255,.16),transparent_60%)]" />
      <div className="stage absolute inset-0 flex items-center justify-center md:justify-end md:pr-[8vw]" aria-hidden="true">
        <div className="tilt relative h-[360px] w-[360px] max-sm:h-[240px] max-sm:w-[240px]">
          <div className="rig relative h-full w-full">
            {layers.map((l) => (
              <div key={l.t} className="slab"><small>{l.t}</small><span>{l.n}</span></div>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-copy relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16 md:pb-24">
        <p className="mb-5 text-mute">{profile.name} | {profile.location}</p>
        <h1 className="font-display text-[clamp(2.4rem,7vw,5.8rem)] font-extrabold leading-[1.02] tracking-tight">
          {profile.headline.map((line) => (
            <span key={line} className="block overflow-hidden pb-1"><span className="hero-line block">{line}</span></span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-amber px-6 py-3 font-semibold text-ink transition hover:brightness-110">See my projects</a>
          <a href={profile.resume} className="rounded-full border border-line px-6 py-3 transition hover:border-sky">Download resume</a>
          <a href="#contact" className="rounded-full border border-line px-6 py-3 transition hover:border-sky">Contact me</a>
        </div>
      </div>
    </header>
  )
}
