'use client'

import { useEffect, useState } from 'react'
import {
  Activity,
  CalendarDays,
  Camera,
  CheckCircle2,
  Cpu,
  Database,
  Dumbbell,
  FolderKanban,
  Inbox,
  Lock,
  NotebookPen,
  Play,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wifi,
} from 'lucide-react'

const modules = [
  { label: 'Inbox', value: '24', text: 'Priority messages and follow-ups', icon: Inbox, tasks: ['WHOOP email', 'Vercel notice', 'Order follow-up'] },
  { label: 'Calendar', value: '07', text: 'Events and deadlines this week', icon: CalendarDays, tasks: ['Training block', 'KMHA session', 'School work'] },
  { label: 'Projects', value: '12', text: 'Active websites and builds', icon: FolderKanban, tasks: ['CEO command centre', 'KMHA app', 'Portfolio'] },
  { label: 'Training', value: '18', text: 'S&C plans and athlete systems', icon: Dumbbell, tasks: ['Warm-ups', 'Testing data', 'Team sessions'] },
  { label: 'Media', value: '48', text: 'Photos, edits, and content assets', icon: Camera, tasks: ['Edit queue', 'Portfolio hero', 'Export set'] },
  { label: 'Notes', value: '36', text: 'Research, ideas, and planning', icon: NotebookPen, tasks: ['WHOOP pitch', 'Network notes', 'Lab notes'] },
  { label: 'Systems', value: '09', text: 'NAS, UniFi, GitHub, and Vercel', icon: Server, tasks: ['NAS check', 'UniFi switch', 'Deployment'] },
  { label: 'Security', value: 'OK', text: 'Access, auth, and account protection', icon: ShieldCheck, tasks: ['GitHub access', 'Vercel auth', 'Private keys'] },
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
  const [logs, setLogs] = useState(['System loaded', 'Interface visible', 'Modules online', 'Command input ready'])

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  function runCommand(text: string) {
    const clean = text.trim() || `Analyze ${active.label}`
    setLogs((current) => [`${active.label}: ${clean}`, 'Command executed successfully', ...current].slice(0, 8))
    setCommand('')
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-[1700px] p-6">
        <header className="mb-6 rounded-3xl border border-cyan-400/30 bg-[#101f33] p-6 shadow-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">Personal AI Command System</p>
              <h1 className="mt-2 text-4xl font-black md:text-6xl">JARVIS Command Centre</h1>
              <p className="mt-3 text-slate-300">Readable, functional control panel for projects, systems, training, media, notes, and execution.</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-left md:text-right">
              <p className="font-mono text-3xl font-black text-cyan-100">{time}</p>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Operational</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[340px_1fr_380px]">
          <aside className="space-y-6">
            <div className="rounded-3xl border border-cyan-400/30 bg-[#101f33] p-6 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Operator</p>
              <h2 className="mt-3 text-4xl font-black">Daniel OS</h2>
              <p className="mt-3 text-slate-300">Central dashboard shell. Everything on this page is clickable and visible.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {diagnostics.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-2xl border border-cyan-400/25 bg-[#10253d] p-4">
                    <Icon className="h-6 w-6 text-emerald-300" />
                    <p className="mt-4 text-xs uppercase tracking-[0.25em] text-cyan-300">{item.label}</p>
                    <p className="mt-1 text-xl font-black">{item.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-[#101f33] p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <TerminalSquare className="h-6 w-6 text-emerald-300" />
                <h3 className="text-2xl font-black">Command Feed</h3>
              </div>
              <div className="space-y-3">
                {logs.map((log, index) => (
                  <div key={`${log}-${index}`} className="rounded-xl border border-cyan-400/20 bg-[#07111f] p-3 font-mono text-sm text-cyan-50">
                    <span className="text-emerald-300">›</span> {log}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="rounded-[2rem] border border-cyan-400/30 bg-[#101f33] p-6 shadow-2xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-[#08182b] p-6">
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
                <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/25" />
                <div className="relative z-10 flex min-h-[450px] items-center justify-center">
                  <div className="flex h-72 w-72 flex-col items-center justify-center rounded-full border border-cyan-200 bg-[#06243a] text-center shadow-[0_0_100px_rgba(34,211,238,0.55)]">
                    <Sparkles className="h-12 w-12 text-cyan-200" />
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.45em] text-emerald-300">Neural Core</p>
                    <h2 className="mt-2 text-5xl font-black">JARVIS</h2>
                    <p className="mt-3 max-w-[200px] text-sm text-cyan-100">Ready for command.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-cyan-400/25 bg-[#08182b] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Active Module</p>
                <h2 className="mt-3 text-4xl font-black">{active.label}</h2>
                <p className="mt-3 text-slate-300">{active.text}</p>
                <div className="mt-5 rounded-2xl border border-cyan-400/25 bg-[#07111f] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Current Metric</p>
                  <p className="mt-2 text-6xl font-black">{active.value}</p>
                </div>
                <div className="mt-5 space-y-3">
                  {active.tasks.map((task) => (
                    <div key={task} className="flex items-center gap-3 rounded-xl bg-cyan-400/10 p-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      <span className="text-sm text-slate-100">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {modules.map((module) => {
                const Icon = module.icon
                const selected = active.label === module.label
                return (
                  <button key={module.label} onClick={() => setActive(module)} className={`rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${selected ? 'border-cyan-200 bg-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,0.3)]' : 'border-cyan-400/25 bg-[#08182b] hover:bg-cyan-400/10'}`}>
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-cyan-300" />
                      <span className="font-mono text-xl font-black text-emerald-300">{module.value}</span>
                    </div>
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">{module.label}</p>
                    <p className="mt-2 text-sm text-slate-300">{module.text}</p>
                  </button>
                )
              })}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-cyan-400/30 bg-[#101f33] p-6 shadow-xl">
              <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-[#07111f] px-4 py-4">
                <Search className="h-5 w-5 text-cyan-300" />
                <input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && runCommand(command)} placeholder="Ask JARVIS anything..." className="w-full bg-transparent text-white placeholder:text-slate-400 outline-none" />
              </div>
              <button onClick={() => runCommand(command)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 font-black text-slate-950 hover:bg-emerald-300">
                <Play className="h-5 w-5" /> Execute Command
              </button>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-[#101f33] p-6 shadow-xl">
              <h3 className="mb-4 text-2xl font-black">Module Actions</h3>
              <div className="grid gap-3">
                {['Open module', 'Run analysis', 'Create task', 'Export report'].map((action) => (
                  <button key={action} onClick={() => runCommand(action)} className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-left font-bold hover:bg-emerald-400/15">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-[#101f33] p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <Activity className="h-6 w-6 text-emerald-300" />
                <h3 className="text-2xl font-black">Live Telemetry</h3>
              </div>
              {[72, 48, 91, 64, 83].map((width, index) => (
                <div key={index} className="mb-4">
                  <div className="mb-2 flex justify-between text-sm text-slate-300"><span>Signal {index + 1}</span><span>{width}%</span></div>
                  <div className="h-3 overflow-hidden rounded-full bg-cyan-400/15"><div className="h-full rounded-full bg-cyan-300" style={{ width: `${width}%` }} /></div>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
