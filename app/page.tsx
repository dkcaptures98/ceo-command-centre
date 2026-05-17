'use client'

import { useEffect, useState } from 'react'
import { Activity, CalendarDays, Camera, Cpu, Database, Dumbbell, FolderKanban, Inbox, Lock, NotebookPen, Search, Server, ShieldCheck, Sparkles, TerminalSquare, Wifi, Zap } from 'lucide-react'

const modules = [
  { label: 'Inbox', value: '24', text: 'Priority threads queued', icon: Inbox },
  { label: 'Calendar', value: '07', text: 'Events in command window', icon: CalendarDays },
  { label: 'Projects', value: '12', text: 'Active builds tracked', icon: FolderKanban },
  { label: 'Training', value: '18', text: 'Athlete systems online', icon: Dumbbell },
  { label: 'Media', value: '48', text: 'Content assets indexed', icon: Camera },
  { label: 'Notes', value: '36', text: 'Research files synced', icon: NotebookPen },
  { label: 'Systems', value: '09', text: 'Infrastructure nodes live', icon: Server },
  { label: 'Security', value: 'OK', text: 'Access layer protected', icon: ShieldCheck },
]

const diagnostics = [
  { label: 'CPU', value: '37%', icon: Cpu },
  { label: 'Network', value: 'Online', icon: Wifi },
  { label: 'Database', value: 'Synced', icon: Database },
  { label: 'Security', value: 'Locked', icon: Lock },
]

export default function HomePage() {
  const [time, setTime] = useState('')
  const [active, setActive] = useState(modules[0])

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.22),transparent_31%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.16),transparent_28%),linear-gradient(135deg,#020617,#02040a_55%,#03111c)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.055)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_45%,rgba(0,0,0,0.72)_100%)]" />

      <section className="relative mx-auto grid min-h-screen max-w-[1700px] grid-cols-1 gap-5 p-5 xl:grid-cols-[340px_1fr_340px]">
        <aside className="rounded-[32px] border border-cyan-300/20 bg-slate-950/65 p-5 shadow-[0_0_80px_rgba(34,211,238,0.16)] backdrop-blur-xl">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.04] p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-cyan-300">Operator</p>
            <h1 className="mt-3 text-4xl font-black">Daniel OS</h1>
            <p className="mt-2 text-sm text-cyan-100/60">Personal command intelligence shell</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {diagnostics.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-2xl border border-cyan-300/15 bg-black/35 p-4">
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-cyan-300/55">{item.label}</p>
                  <p className="mt-1 text-lg font-black text-cyan-50">{item.value}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/15 bg-black/35 p-5">
            <div className="mb-4 flex items-center gap-3">
              <TerminalSquare className="h-6 w-6 text-emerald-300" />
              <h2 className="text-xl font-black">Command Feed</h2>
            </div>
            {['Core initialized', 'Project scan complete', 'Network stable', 'Assistant shell ready'].map((log) => (
              <div key={log} className="mb-3 rounded-xl border border-cyan-300/10 bg-white/[0.03] p-3 font-mono text-xs text-cyan-100/65">
                <span className="text-emerald-300">›</span> {log}
              </div>
            ))}
          </div>
        </aside>

        <section className="relative min-h-[890px] overflow-hidden rounded-[40px] border border-cyan-300/20 bg-black/35 shadow-[0_0_100px_rgba(34,211,238,0.18)] backdrop-blur-xl">
          <header className="relative z-30 flex items-center justify-between border-b border-cyan-300/15 bg-black/30 px-8 py-6 backdrop-blur-xl">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.7em] text-cyan-300/80">Stark-Class Personal Operating System</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-[0.12em]">JARVIS Command Centre</h2>
            </div>
            <div className="text-right">
              <p className="font-mono text-3xl font-black text-cyan-200">{time}</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300">All systems nominal</p>
            </div>
          </header>

          <div className="absolute left-1/2 top-[54%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
          <div className="absolute left-1/2 top-[54%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/15" />
          <div className="absolute left-1/2 top-[54%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25" />
          <div className="absolute left-1/2 top-[54%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="absolute left-1/2 top-[54%] z-20 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/50 bg-[#03111f]/95 shadow-[0_0_130px_rgba(34,211,238,0.65),inset_0_0_80px_rgba(16,185,129,0.20)]">
            <div className="absolute h-96 w-96 animate-pulse rounded-full border border-cyan-300/25" />
            <div className="text-center">
              <Sparkles className="mx-auto h-12 w-12 text-cyan-200" />
              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.5em] text-emerald-300">Neural Core</p>
              <h3 className="mt-2 text-5xl font-black">JARVIS</h3>
              <p className="mx-auto mt-3 max-w-[190px] text-xs leading-5 text-cyan-100/60">Personal command matrix awaiting operator input</p>
            </div>
          </div>

          <div className="absolute inset-x-8 bottom-8 z-30 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {modules.slice(0, 8).map((module) => {
              const Icon = module.icon
              const selected = active.label === module.label
              return (
                <button key={module.label} onClick={() => setActive(module)} className={`rounded-3xl border p-4 text-left backdrop-blur-xl transition hover:-translate-y-1 ${selected ? 'border-cyan-200/70 bg-cyan-300/15 shadow-[0_0_45px_rgba(34,211,238,0.32)]' : 'border-cyan-300/15 bg-slate-950/70 hover:border-cyan-300/45'}`}>
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-cyan-300" />
                    <span className="font-mono text-xl font-black text-emerald-300">{module.value}</span>
                  </div>
                  <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300/65">{module.label}</p>
                  <p className="mt-2 text-xs text-cyan-100/55">{module.text}</p>
                </button>
              )
            })}
          </div>
        </section>

        <aside className="rounded-[32px] border border-cyan-300/20 bg-slate-950/65 p-5 shadow-[0_0_80px_rgba(34,211,238,0.16)] backdrop-blur-xl">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.04] p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-300">Active Module</p>
            <h2 className="mt-3 text-5xl font-black">{active.label}</h2>
            <p className="mt-3 text-sm leading-6 text-cyan-100/60">{active.text}</p>
            <div className="mt-5 rounded-3xl border border-cyan-300/15 bg-black/40 p-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/60">Current Metric</p>
              <p className="mt-2 text-6xl font-black text-white">{active.value}</p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/15 bg-black/35 p-5">
            <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-4">
              <Search className="h-5 w-5 text-cyan-300" />
              <span className="text-sm text-cyan-100/55">Ask JARVIS anything...</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['Analyze', 'Deploy', 'Schedule', 'Secure'].map((action) => (
                <button key={action} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.05] px-4 py-3 text-sm font-bold text-cyan-100 transition hover:border-emerald-300/60 hover:text-emerald-200">
                  {action}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/15 bg-black/35 p-5">
            <div className="mb-4 flex items-center gap-3">
              <Activity className="h-6 w-6 text-emerald-300" />
              <h3 className="text-xl font-black">Live Telemetry</h3>
            </div>
            {[72, 48, 91, 64, 83].map((width, index) => (
              <div key={index} className="mb-4">
                <div className="mb-2 flex justify-between text-xs text-cyan-100/55">
                  <span>Signal {index + 1}</span>
                  <span>{width}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-cyan-300/10">
                  <div className="h-full rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" style={{ width: `${width}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}
