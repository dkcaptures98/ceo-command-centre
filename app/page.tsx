'use client'

import { useEffect, useState } from 'react'
import { Activity, CalendarDays, Camera, Cpu, Database, Dumbbell, FolderKanban, Inbox, Lock, NotebookPen, Search, Server, ShieldCheck, Sparkles, TerminalSquare, Wifi } from 'lucide-react'

const modules = [
  { label: 'Inbox', value: '24', text: 'Priority threads queued', icon: Inbox, actions: ['Open inbox queue', 'Review follow-ups', 'Draft response'] },
  { label: 'Calendar', value: '07', text: 'Events in command window', icon: CalendarDays, actions: ['View schedule', 'Add event', 'Plan week'] },
  { label: 'Projects', value: '12', text: 'Active builds tracked', icon: FolderKanban, actions: ['Open project board', 'Check GitHub', 'Deploy build'] },
  { label: 'Training', value: '18', text: 'Athlete systems online', icon: Dumbbell, actions: ['View plans', 'Create session', 'Check attendance'] },
  { label: 'Media', value: '48', text: 'Content assets indexed', icon: Camera, actions: ['Open gallery', 'Edit queue', 'Export assets'] },
  { label: 'Notes', value: '36', text: 'Research files synced', icon: NotebookPen, actions: ['Open notes', 'New idea', 'Search archive'] },
  { label: 'Systems', value: '09', text: 'Infrastructure nodes live', icon: Server, actions: ['Check NAS', 'Open UniFi', 'Run diagnostics'] },
  { label: 'Security', value: 'OK', text: 'Access layer protected', icon: ShieldCheck, actions: ['Audit access', 'Lock system', 'Review logs'] },
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
  const [command, setCommand] = useState('')
  const [logs, setLogs] = useState(['Core initialized', 'Project scan complete', 'Network stable', 'Assistant shell ready'])

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  function runCommand(text: string) {
    const clean = text.trim()
    if (!clean) return
    setLogs((current) => [`Command received: ${clean}`, `${active.label} module standing by`, ...current].slice(0, 7))
    setCommand('')
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020711] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.28),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(16,185,129,0.18),transparent_25%),linear-gradient(135deg,#020617,#04111f_60%,#020617)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

      <section className="relative z-10 mx-auto grid min-h-screen max-w-[1750px] gap-5 p-5 xl:grid-cols-[340px_1fr_360px]">
        <aside className="rounded-[32px] border border-cyan-300/25 bg-[#061427]/85 p-5 shadow-[0_0_70px_rgba(34,211,238,0.25)] backdrop-blur-xl">
          <div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 p-5">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-200">Operator</p>
            <h1 className="mt-3 text-4xl font-black text-white">Daniel OS</h1>
            <p className="mt-2 text-sm text-cyan-100/80">Personal command intelligence shell</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {diagnostics.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-2xl border border-cyan-300/20 bg-black/35 p-4">
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-cyan-200/70">{item.label}</p>
                  <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-black/35 p-5">
            <div className="mb-4 flex items-center gap-3">
              <TerminalSquare className="h-6 w-6 text-emerald-300" />
              <h2 className="text-xl font-black text-white">Command Feed</h2>
            </div>
            {logs.map((log) => (
              <div key={log} className="mb-3 rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-3 font-mono text-xs text-cyan-50/80">
                <span className="text-emerald-300">›</span> {log}
              </div>
            ))}
          </div>
        </aside>

        <section className="relative min-h-[900px] overflow-hidden rounded-[40px] border border-cyan-300/25 bg-[#030b16]/80 shadow-[0_0_110px_rgba(34,211,238,0.25)] backdrop-blur-xl">
          <header className="relative z-30 flex flex-col gap-4 border-b border-cyan-300/20 bg-black/30 px-8 py-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.5em] text-cyan-300">Stark-Class Personal Operating System</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-[0.08em] text-white">JARVIS Command Centre</h2>
            </div>
            <div className="text-left md:text-right">
              <p className="font-mono text-3xl font-black text-cyan-200">{time}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">All systems nominal</p>
            </div>
          </header>

          <div className="absolute left-1/2 top-[45%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
          <div className="absolute left-1/2 top-[45%] h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20" />
          <div className="absolute left-1/2 top-[45%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />
          <div className="absolute left-1/2 top-[45%] h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/25 blur-3xl" />

          <div className="absolute left-1/2 top-[45%] z-20 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/60 bg-[#06192a]/95 shadow-[0_0_140px_rgba(34,211,238,0.7),inset_0_0_80px_rgba(16,185,129,0.22)]">
            <div className="absolute h-96 w-96 animate-pulse rounded-full border border-cyan-300/25" />
            <div className="relative text-center">
              <Sparkles className="mx-auto h-12 w-12 text-cyan-200" />
              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.5em] text-emerald-300">Neural Core</p>
              <h3 className="mt-2 text-5xl font-black text-white">JARVIS</h3>
              <p className="mx-auto mt-3 max-w-[190px] text-xs leading-5 text-cyan-100/75">Personal command matrix awaiting operator input</p>
            </div>
          </div>

          <div className="absolute inset-x-8 bottom-8 z-30 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {modules.map((module) => {
              const Icon = module.icon
              const selected = active.label === module.label
              return (
                <button key={module.label} onClick={() => setActive(module)} className={`rounded-3xl border p-4 text-left backdrop-blur-xl transition hover:-translate-y-1 ${selected ? 'border-cyan-200 bg-cyan-300/20 shadow-[0_0_50px_rgba(34,211,238,0.45)]' : 'border-cyan-300/25 bg-slate-950/85 hover:border-cyan-300/60'}`}>
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-cyan-300" />
                    <span className="font-mono text-xl font-black text-emerald-300">{module.value}</span>
                  </div>
                  <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-200">{module.label}</p>
                  <p className="mt-2 text-xs text-cyan-50/75">{module.text}</p>
                </button>
              )
            })}
          </div>
        </section>

        <aside className="rounded-[32px] border border-cyan-300/25 bg-[#061427]/85 p-5 shadow-[0_0_70px_rgba(34,211,238,0.25)] backdrop-blur-xl">
          <div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 p-5">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Active Module</p>
            <h2 className="mt-3 text-5xl font-black text-white">{active.label}</h2>
            <p className="mt-3 text-sm leading-6 text-cyan-50/80">{active.text}</p>
            <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Current Metric</p>
              <p className="mt-2 text-6xl font-black text-white">{active.value}</p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-black/35 p-5">
            <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-4">
              <Search className="h-5 w-5 text-cyan-300" />
              <input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && runCommand(command)} placeholder="Ask JARVIS anything..." className="w-full bg-transparent text-sm text-white placeholder:text-cyan-100/50 outline-none" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {active.actions.map((action) => (
                <button key={action} onClick={() => runCommand(action)} className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-50 transition hover:border-emerald-300/70 hover:bg-emerald-300/15 hover:text-emerald-100">
                  {action}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-black/35 p-5">
            <div className="mb-4 flex items-center gap-3">
              <Activity className="h-6 w-6 text-emerald-300" />
              <h3 className="text-xl font-black text-white">Live Telemetry</h3>
            </div>
            {[72, 48, 91, 64, 83].map((width, index) => (
              <div key={index} className="mb-4">
                <div className="mb-2 flex justify-between text-xs text-cyan-50/70">
                  <span>Signal {index + 1}</span>
                  <span>{width}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-cyan-300/15">
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
