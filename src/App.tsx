import { ReactNode } from 'react'
import Hero from './Hero'
import { profile, stats, experience, flagship, projects, skills, education, credentials } from './data'

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <h2 className="mb-12 font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {children}
    </section>
  )
}

const ext = { target: '_blank', rel: 'noreferrer noopener' } as const

export default function App() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gradient-to-b from-ink to-transparent px-6 py-4" aria-label="Main">
        <a href="#top" className="font-display font-bold">PK</a>
        <div className="flex gap-5 text-sm text-mute">
          {['about', 'experience', 'projects', 'skills', 'contact'].map((s) => (
            <a key={s} href={`#${s}`} className="capitalize transition hover:text-bone max-sm:last:hidden">{s}</a>
          ))}
        </div>
      </nav>
      <div id="top" />
      <Hero />
      <main>
        <Section id="about" title="Backend first, cloud always.">
          <div className="grid gap-12 md:grid-cols-2">
            <p className="max-w-prose text-lg leading-relaxed text-mute">
              I write Python services that are tested, containerised and deployed through CI. My internships covered both sides of that work:
              automation and database tuning in Python, and EC2, Lambda and S3 operations on AWS. I like practical engineering problems,
              testable code and learning from code review.
            </p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-5xl font-extrabold text-amber">{s.v}</dt>
                  <dd className="mt-2 text-sm text-mute">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="relative ml-2 space-y-14 border-l border-line pl-8">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[39px] top-2 h-3 w-3 rounded-full bg-sky" />
                <p className="text-sm text-mute">{e.when}</p>
                <h3 className="font-display text-2xl font-bold">{e.role}</h3>
                <p className="mb-4 text-sky">{e.org}</p>
                <ul className="max-w-2xl list-disc space-y-2 pl-5 text-mute">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects">
          <article className="grid gap-8 rounded-3xl border border-line bg-panel p-8 md:grid-cols-5 md:p-12">
            <div className="md:col-span-3">
              <p className="mb-3 text-sm text-amber">Flagship project</p>
              <h3 className="font-display text-3xl font-bold md:text-4xl">{flagship.name}</h3>
              <p className="mt-4 max-w-prose text-lg text-mute">{flagship.blurb}</p>
              <a href={flagship.link} {...ext} className="mt-8 inline-block rounded-full bg-amber px-6 py-3 font-semibold text-ink transition hover:brightness-110">View code on GitHub</a>
            </div>
            <div className="md:col-span-2">
              <ul className="list-disc space-y-2 pl-5 text-mute">{flagship.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <p className="mt-6 text-sm text-bone">{flagship.stack.join(', ')}</p>
            </div>
          </article>
          <ul className="mt-10">
            {projects.map((p) => (
              <li key={p.name} className="border-t border-line last:border-b">
                <a href={p.link} {...ext} className="group grid gap-2 py-7 transition md:grid-cols-5 md:gap-8">
                  <h3 className="font-display text-xl font-bold transition group-hover:text-sky md:col-span-2">{p.name}</h3>
                  <p className="text-mute md:col-span-2">{p.text}</p>
                  <p className="text-sm text-bone md:text-right">{p.stack}</p>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.g}>
                <h3 className="mb-4 font-display text-xl font-bold">{s.g}</h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((i) => <li key={i} className="rounded-full border border-line px-3 py-1 text-sm text-mute">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-display text-xl font-bold">Education</h3>
              <ul className="space-y-3">{education.map((e) => <li key={e.t}><p>{e.t}</p><p className="text-sm text-mute">{e.d}</p></li>)}</ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-xl font-bold">Certifications</h3>
              <ul className="space-y-3 text-mute">{credentials.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Let's talk.">
          <p className="max-w-xl text-lg text-mute">I'm looking for an entry-level Python, backend, full-stack or cloud role. Email is the fastest way to reach me.</p>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-block break-all font-display text-2xl font-bold text-amber md:text-4xl">{profile.email}</a>
          <div className="mt-8 flex gap-6 text-mute">
            <a href={profile.github} {...ext} className="hover:text-bone">GitHub</a>
            <a href={profile.linkedin} {...ext} className="hover:text-bone">LinkedIn</a>
            <a href={profile.resume} className="hover:text-bone">Resume</a>
          </div>
        </Section>
      </main>
      <footer className="border-t border-line px-6 py-8 text-center text-sm text-mute">{profile.name} | {profile.location}</footer>
    </>
  )
}
