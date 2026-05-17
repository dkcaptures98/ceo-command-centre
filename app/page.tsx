'use client'

import { useEffect, useMemo, useState } from 'react'
import { Activity, BarChart3, CalendarDays, Camera, CheckCircle2, Cpu, Database, Dumbbell, FolderKanban, Inbox, Lock, NotebookPen, Play, Search, Server, ShieldCheck, Sparkles, TerminalSquare, Wifi, Zap } from 'lucide-react'

type Module = {
  label: string
  value: string
  text: string
  icon: any
  accent: string
  actions: string[]
  tasks: string[]
}

const modules: Module[] = [
  { label: 'Inbox', value: '24', text: 'Priority threads queued', icon: Inbox, accent: 'from-cyan-400 to-blue-500', actions: ['Open inbox queue', 'Review follow-ups', 'Draft response'], tasks: ['Sponsorship reply', 'Vercel deployment', 'Gear order follow-up'] },
  { label: 'Calendar', value: '07', text: 'Events in command window', icon: CalendarDays, accent: 'from-sky-400 to-indigo-500', actions: ['View schedule', 'Add event', 'Plan week'], tasks: ['Lift block', 'KMHA check-in', 'Assignment window'] },
  { label: 'Projects', value: '12', text: 'Active builds tracked', icon: FolderKanban, accent: 'from-emerald-400 to-cyan-500', actions: ['Open project board', 'Check GitHub', 'Deploy build'], tasks: ['CEO Command Centre', 'KMHA dashboard', 'Photo portfolio'] },
  { label: 'Training', value: '18', text: 'Athlete systems online', icon: Dumbbell, accent: 'from-lime-400 to-emerald-500', actions: ['View plans', 'Create session', 'Check attendance'], tasks: ['Warm-up library', 'Testing dashboard', 'S&C templates'] },
  { label: 'Media', value: '48', text: 'Content assets indexed', icon: Camera, accent: 'from-fuchsia-400 to-cyan-500', actions: ['Open gallery', 'Edit queue', 'Export assets'], tasks: ['Volleyball edits', 'Portfolio cover', 'Export queue'] },
  { label: 'Notes', value: '36', text: 'Research files synced', icon: NotebookPen, accent: 'from-amber-300 to-orange-500', actions: ['Open notes', 'New idea', 'Search archive'], tasks: ['WHOOP pitch', 'Network setup', 'Lab notes'] },
  { label: 'Systems', value: '09', text: 'Infrastructure nodes live', icon: Server, accent: 'from-cyan-300 to-emerald-400', actions: ['Check NAS', 'Open UniFi', 'Run diagnostics'], tasks: ['NAS online', 'UniFi switch', 'Vercel production'] },
  { label: 'Security', value: 'OK', text: 'Access layer protected', icon: ShieldCheck, accent: 'from-red-400 to-orange-500', actions: ['Audit access', 'Lock system', 'Review logs'], tasks: ['GitHub access', 'Vercel auth', 'Private keys'] },
]

const diagnostics = [
  { label: 'CPU', value: '37%', icon: Cpu },
  { label: 'Network', value: 'Online', icon: Wifi },
  { label: 'Database', value: 'Synced', icon: Database },
  { label: 'Security', value: 'Locked', icon: Lock },
]

export default function HomePage() {
  const [time, setTime] = useState('')
  const [active, setActive] = useState<Module>(modules[0])
  const [command, setCommand] = useState('')
  const [logs, setLogs] = useState(['Core initialized', 'Project scan complete', 'Network stable', 'Assistant shell ready'])

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  const completion = useMemo(() => active.label === 'Security' ? 100 : Math.min(96, 52 + Number.parseInt(active.value) || 76), [active])

  function runCommand(text: string) {
    const clean = text.trim()
    if (!clean) return
    setLogs((current) => [`${active.label}: ${clean}`, 'Command executed successfully', ...current].slice(0, 8))
    setCommand('')
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06101f] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.26),transparent_28%),linear-gradient(135deg,#081426,#06101f_45%,#020617)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(125,211,252,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.09)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />

      <section className="relative z-10 mx-auto min-h-screen max-w-[1760px] p-5">
        <header className="mb-5 rounded-[28px] border border-cyan-300/25 bg-slate-950/80 p-5 shadow-[0_0_70px_rgba(34,211,238,0.22)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-cyan-300">Personal AI Command System</p>
              <h1 className="mt-2 text-4xl font-black tracking-tight md:text-6xl">JARVIS Command Centre</h1>
            </div>
            <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-right">
              <p className="font-mono text-2xl font-black text-cyan-100">{time}</p>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">Operational</p>
            </div>
          </div>
        </header>

        <div className="grid gap-5 xl:grid-cols-[330px_1fr_380px]">
          <aside className="space-y-5">
            <div className="rounded-[28px] border border-cyan-300/25 bg-slate-950/80 p-5 shadow-[0_0_60px_rgba(34,211,238,0.18)] backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">Operator</p>
              <h2 className="mt-3 text-4xl font-black">Daniel OS</h2>
              <p className="mt-2 text-sm text-slate-300">Central dashboard for projects, systems, training, media, notes, and execution.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {diagnostics.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-4 shadow-lg">
                    <Icon className="h-5 w-5 text-emerald-300" />
                    <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-cyan-300/75">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-white">{item.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="rounded-[28px] border border-cyan-300/25 bg-slate-950/80 p-5 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <TerminalSquare className="h-6 w-6 text-emerald-300" />
                <h3 className="text-xl font-black">Command Feed</h3>
              </div>
              <div className="space-y-3">
                {logs.map((log, index) => (
                  <div key={`${log}-${index}`} className="rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-3 font-mono text-xs text-cyan-50">
                    <span className="text-emerald-300">›</span> {log}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="min-h-[760px] rounded-[36px] border border-cyan-300/25 bg-slate-950/80 p-6 shadow-[0_0_90px_rgba(34,211,238,0.24)] backdrop-blur-xl">
            <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
              <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-cyan-300/20 bg-[#08182b] p-6">
                <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
                <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20" />
                <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/25 blur-3xl" />
                <div className="relative z-10 flex h-full min-h-[470px] items-center justify-center">
                  <div className="flex h-72 w-72 flex-col items-center justify-center rounded-full border border-cyan-200/70 bg-[#06192a] text-center shadow-[0_0_120px_rgba(34,211,238,0.65),inset_0_0_70px_rgba(16,185,129,0.18)]">
                    <Sparkles className="h-12 w-12 text-cyan-200" />
                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.45em] text-emerald-300">Neural Core</p>
                    <h2 className="mt-2 text-5xl font-black">JARVIS</h2>
                    <p className="mt-3 max-w-[190px] text-sm text-cyan-100/80">Ready for operator command.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-cyan-300/20 bg-[#08182b] p-5">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-300">Active Module</p>
                <h2 className="mt-3 text-4xl font-black">{active.label}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{active.text}</p>
                <div className="mt-5 rounded-3xl border border-cyan-300/20 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Current Metric</p>
                  <p className="mt-2 text-6xl font-black">{active.value}</p>
                </div>
                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs text-slate-300"><span>Readiness</span><span>{completion}%</span></div>
                  <div className="h-3 rounded-full bg-cyan-300/10"><div className="h-full rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.95)]" style={{ width: `${completion}%` }} /></div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {modules.map((module) => {
                const Icon = module.icon
                const selected = active.label === module.label
                return (
                  <button key={module.label} onClick={() => setActive(module)} className={`rounded-3xl border p-4 text-left transition hover:-translate-y-1 ${selected ? 'border-cyan-200 bg-cyan-300/20 shadow-[0_0_45px_rgba(34,211,238,0.35)]' : 'border-cyan-300/20 bg-[#08182b] hover:border-cyan-300/70 hover:bg-cyan-300/10'}`}>
                    <div className="flex items-center justify-between"><Icon className="h-6 w-6 text-cyan-300" /><span className="font-mono text-xl font-black text-emerald-300">{module.value}</span></div>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-200">{module.label}</p>
                    <p className="mt-2 text-xs text-slate-300">{module.text}</p>
                  </button>
                )
              })}
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[28px] border border-cyan-300/25 bg-slate-950/80 p-5 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-4">
                <Search className="h-5 w-5 text-cyan-300" />
                <input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && runCommand(command)} placeholder="Ask JARVIS anything..." className="w-full bg-transparent text-sm text-white placeholder:text-cyan-100/55 outline-none" />
              </div>
              <button onClick={() => runCommand(command || `Analyze ${active.label}`)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 font-black text-slate-950 transition hover:bg-emerald-300">
                <Play className="h-5 w-5" /> Execute Command
              </button>
            </div>

            <div className="rounded-[28px] border border-cyan-300/25 bg-slate-950/80 p-5 shadow-lg backdrop-blur-xl">
              <h3 className="mb-4 text-xl font-black">Module Actions</h3>
              <div className="grid gap-3">
                {active.actions.map((action) => (
                  <button key={action} onClick={() => runCommand(action)} className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-left text-sm font-bold text-white transition hover:border-emerald-300/70 hover:bg-emerald-300/15">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-cyan-300/25 bg-slate-950/80 p-5 shadow-lg backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3"><BarChart3 className="h-6 w-6 text-emerald-300" /><h3 className="text-xl font-black">Task Stack</h3></div>
              <div className="space-y-3">
                {active.tasks.map((task) => (
                  <div key={task} className="flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    <span className="text-sm text-slate-200">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
