'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Activity,
  BrainCircuit,
  CalendarDays,
  Camera,
  ChevronRight,
  Cpu,
  Database,
  Dumbbell,
  FolderKanban,
  Inbox,
  Lock,
  Network,
  NotebookPen,
  Radio,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wifi,
  Zap,
} from 'lucide-react'

const modules = [
  { id: '01', label: 'INBOX', metric: '24', detail: 'Priority threads queued', icon: Inbox, angle: 0 },
  { id: '02', label: 'CALENDAR', metric: '7', detail: 'Events in command window', icon: CalendarDays, angle: 45 },
  { id: '03', label: 'PROJECTS', metric: '12', detail: 'Active builds tracked', icon: FolderKanban, angle: 90 },
  { id: '04', label: 'TRAINING', metric: '18', detail: 'Athlete systems online', icon: Dumbbell, angle: 135 },
  { id: '05', label: 'MEDIA', metric: '48', detail: 'Content assets indexed', icon: Camera, angle: 180 },
  { id: '06', label: 'NOTES', metric: '36', detail: 'Research files synced', icon: NotebookPen, angle: 225 },
  { id: '07', label: 'SYSTEMS', metric: '9', detail: 'Infrastructure nodes live', icon: Server, angle: 270 },
  { id: '08', label: 'SECURITY', metric: 'OK', detail: 'Access layer protected', icon: ShieldCheck, angle: 315 },
]

const logs = [
  'Boot sequence complete: CEO Command Core online',
  'Scanning active projects: 12 builds detected',
  'Network layer stable: UniFi / NAS / cloud links nominal',
  'Priority routing enabled for schedule, inbox, and systems',
  'JARVIS-style assistant shell ready for command input',
]

const diagnostics = [
  { label: 'CORE LOAD', value: '37%', icon: Cpu },
  { label: 'NETWORK', value: 'ONLINE', icon: Wifi },
  { label: 'DATABASE', value: 'SYNCED', icon: Database },
  { label: 'SECURITY', value: 'LOCKED', icon: Lock },
]

export default function HomePage() {
  const [time, setTime] = useState('')
  const [active, setActive] = useState(modules[0])

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const orbitModules = useMemo(() => {
    const radius = 310
    return modules.map((module) => {
      const radians = (module.angle * Math.PI) / 180
      return { ...module, x: Math.cos(radians) * radius, y: Math.sin(radians) * radius }
    })
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#01040a] text-cyan-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_75%_20%,rgba(16,185,129,0.18),transparent_28%),linear-gradient(180deg,#020617,#01040a)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
      <div className="pointer-events-none fixed inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.035)_0px,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_5px)] opacity-10" />

      <section className="relative z-10 mx-auto grid min-h-screen max-w-[1800px] grid-cols-1 gap-5 p-5 xl:grid-cols-[360px_1fr_360px]">
        <aside className="rounded-[2rem] border border-cyan-300/15 bg-cyan-950/10 p-5 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-cyan-300/15 pb-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-300">Operator</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight">Daniel OS</h1>
            </div>
            <div className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">LIVE</div>
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/15 bg-black/30 p-4">
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-9 w-9 text-cyan-300" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">JARVIS Core</p>
                <p className="text-xs text-cyan-100/50">Personal command intelligence</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {diagnostics.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.03] p-3">
                    <Icon className="h-5 w-5 text-emerald-300" />
                    <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-cyan-100/45">{item.label}</p>
                    <p className="mt-1 text-sm font-black text-cyan-100">{item.value}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {modules.slice(0, 6).map((module) => {
              const Icon = module.icon
              return (
                <button key={module.id} onClick={() => setActive(module)} className="flex w-full items-center justify-between rounded-2xl border border-cyan-300/10 bg-white/[0.025] p-3 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <div>
                      <p className="text-sm font-black tracking-[0.14em]">{module.label}</p>
                      <p className="text-xs text-cyan-100/45">{module.detail}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-cyan-300/60" />
                </button>
              )
            })}
          </div>
        </aside>

        <section className="relative min-h-[880px] overflow-hidden rounded-[2.5rem] border border-cyan-300/15 bg-black/25 shadow-[0_0_100px_rgba(34,211,238,0.13)] backdrop-blur-2xl">
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-cyan-300/15 bg-black/25 px-7 py-5 backdrop-blur-xl">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.65em] text-cyan-300/70">Stark-Class Personal Operating System</p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.1em] text-cyan-50">Command Centre</h2>
            </div>
            <div className="text-right">
              <p className="font-mono text-2xl font-black text-cyan-200">{time}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300">All systems nominal</p>
            </div>
          </div>

          <div className="absolute left-1/2 top-[54%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10" />
          <div className="absolute left-1/2 top-[54%] h-[610px] w-[610px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/15" />
          <div className="absolute left-1/2 top-[54%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
          <div className="absolute left-1/2 top-[54%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-[54%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-3xl" />

          <svg className="absolute left-1/2 top-[54%] h-[840px] w-[840px] -translate-x-1/2 -translate-y-1/2 opacity-60" viewBox="0 0 840 840">
            <defs>
              <linearGradient id="line" x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(34,211,238,0.05)" />
                <stop offset="50%" stopColor="rgba(52,211,153,0.45)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.05)" />
              </linearGradient>
            </defs>
            {orbitModules.map((module) => (
              <line key={module.id} x1="420" y1="420" x2={420 + module.x} y2={420 + module.y} stroke="url(#line)" strokeWidth="1.2" />
            ))}
          </svg>

          <div className="absolute left-1/2 top-[54%] z-30 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-300/40 bg-[#04111c]/95 text-center shadow-[0_0_120px_rgba(34,211,238,0.55),inset_0_0_60px_rgba(16,185,129,0.16)]">
            <div className="absolute h-80 w-80 animate-pulse rounded-full border border-cyan-300/20" />
            <BrainCircuit className="relative h-12 w-12 text-cyan-200" />
            <p className="relative mt-4 text-[10px] font-black uppercase tracking-[0.45em] text-emerald-300">Neural Core</p>
            <h3 className="relative mt-2 text-4xl font-black tracking-tight text-white">JARVIS</h3>
            <p className="relative mt-2 max-w-[170px] text-xs leading-5 text-cyan-100/55">Awaiting command input from operator</p>
          </div>

          {orbitModules.map((module) => {
            const Icon = module.icon
            const isActive = active.label === module.label
            return (
              <button
                key={module.id}
                onClick={() => setActive(module)}
                className={`absolute left-1/2 top-[54%] z-40 w-56 rounded-2xl border p-4 text-left backdrop-blur-2xl transition duration-300 hover:-translate-y-1 ${isActive ? 'border-cyan-200/70 bg-cyan-300/15 shadow-[0_0_50px_rgba(34,211,238,0.35)]' : 'border-cyan-300/15 bg-[#06111f]/80 shadow-[0_25px_90px_rgba(0,0,0,0.55)] hover:border-cyan-300/45'}`}
                style={{ transform: `translate(calc(-50% + ${module.x}px), calc(-50% + ${module.y}px))` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs text-emerald-300">{module.id}</span>
                </div>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300/60">Module</p>
                <h4 className="mt-1 text-lg font-black tracking-[0.18em] text-white">{module.label}</h4>
                <p className="mt-2 text-xs leading-5 text-cyan-100/50">{module.detail}</p>
              </button>
            )
          })}
        </section>

        <aside className="rounded-[2rem] border border-cyan-300/15 bg-cyan-950/10 p-5 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-2xl">
          <div className="rounded-3xl border border-cyan-300/15 bg-black/35 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-emerald-300">Active Module</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">{active.label}</h2>
            <p className="mt-2 text-sm leading-6 text-cyan-100/55">{active.detail}</p>
            <div className="mt-5 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/60">Metric</p>
              <p className="mt-2 text-5xl font-black text-white">{active.metric}</p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/15 bg-black/35 p-5">
            <div className="flex items-center gap-3">
              <TerminalSquare className="h-6 w-6 text-emerald-300" />
              <h3 className="text-lg font-black">Command Log</h3>
            </div>
            <div className="mt-4 space-y-3 font-mono text-xs text-cyan-100/60">
              {logs.map((log) => (
                <div key={log} className="rounded-xl border border-cyan-300/10 bg-white/[0.025] p-3">
                  <span className="text-emerald-300">›</span> {log}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-cyan-300/15 bg-black/35 p-5">
            <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] px-4 py-3">
              <Search className="h-5 w-5 text-cyan-300" />
              <span className="text-sm text-cyan-100/45">Ask JARVIS anything...</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['Analyze', 'Deploy', 'Schedule', 'Secure'].map((action) => (
                <button key={action} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] px-4 py-3 text-sm font-bold text-cyan-100 transition hover:border-emerald-300/50 hover:text-emerald-200">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}
