'use client'

import {
  Activity,
  BrainCircuit,
  CalendarDays,
  Camera,
  ChartNoAxesCombined,
  Cloud,
  Dumbbell,
  FolderKanban,
  Inbox,
  Network,
  NotebookPen,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react'

const nodes = [
  { label: 'Cloud Notes', subtitle: '17 active ideas', icon: Cloud, x: 0, y: -285, tone: 'text-yellow-300' },
  { label: 'Daily Brief', subtitle: '4 priorities today', icon: Activity, x: 240, y: -190, tone: 'text-yellow-300' },
  { label: 'Inbox', subtitle: 'Messages & follow-ups', icon: Inbox, x: 315, y: 10, tone: 'text-cyan-300' },
  { label: 'Calendar', subtitle: 'Schedule & deadlines', icon: CalendarDays, x: 230, y: 210, tone: 'text-cyan-300' },
  { label: 'Systems', subtitle: 'UniFi, NAS, servers', icon: Server, x: 0, y: 305, tone: 'text-emerald-300' },
  { label: 'Training', subtitle: 'S&C plans & athletes', icon: Dumbbell, x: -240, y: 210, tone: 'text-emerald-300' },
  { label: 'Projects', subtitle: 'Websites, apps, builds', icon: FolderKanban, x: -315, y: 10, tone: 'text-sky-300' },
  { label: 'Finance', subtitle: 'Budgets & purchases', icon: ChartNoAxesCombined, x: -240, y: -190, tone: 'text-sky-300' },
]

const sideItems = [
  { label: 'Media', value: '12 assets', icon: Camera },
  { label: 'Notes', value: '36 entries', icon: NotebookPen },
  { label: 'Automation', value: 'Online', icon: Zap },
  { label: 'Security', value: 'Protected', icon: ShieldCheck },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02050c] text-white">
      <section className="relative min-h-screen px-6 py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.22),transparent_28%),radial-gradient(circle_at_50%_15%,rgba(14,165,233,0.16),transparent_35%),linear-gradient(180deg,rgba(2,6,23,0.2),#02050c_82%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:46px_46px] opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-emerald-300/80">Personal Operating System</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">CEO Command Centre</h1>
          </div>
          <div className="hidden rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-2 text-sm font-semibold text-emerald-200 md:block">
            ● Core Online
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-[1fr_300px]">
          <div className="relative flex min-h-[760px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-2xl backdrop-blur-xl">
            <div className="absolute h-[700px] w-[700px] rounded-full border border-emerald-300/15" />
            <div className="absolute h-[540px] w-[540px] rounded-full border border-sky-300/15" />
            <div className="absolute h-[370px] w-[370px] rounded-full border border-white/10" />
            <div className="absolute h-[215px] w-[215px] rounded-full bg-emerald-400/20 blur-3xl" />

            <svg className="absolute h-[760px] w-[760px] opacity-60" viewBox="0 0 760 760">
              {nodes.map((node) => (
                <line key={node.label} x1="380" y1="380" x2={380 + node.x} y2={380 + node.y} stroke="rgba(52,211,153,0.28)" strokeWidth="1" />
              ))}
            </svg>

            <div className="relative z-20 flex h-48 w-48 flex-col items-center justify-center rounded-full border border-emerald-300/50 bg-[#06100d]/95 text-center shadow-[0_0_110px_rgba(34,197,94,0.65)]">
              <BrainCircuit className="mb-3 h-9 w-9 text-emerald-300" />
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-300">Command</p>
              <h2 className="mt-2 text-3xl font-black">CORE</h2>
              <p className="mt-2 text-xs text-slate-400">Tap any module</p>
            </div>

            {nodes.map((node) => {
              const Icon = node.icon
              return (
                <a
                  key={node.label}
                  href="#"
                  className="group absolute z-30 w-52 rounded-2xl border border-white/10 bg-[#07111f]/90 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-[0_0_45px_rgba(34,197,94,0.32)]"
                  style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon className={`h-5 w-5 ${node.tone}`} />
                    </div>
                    <span className="rounded-full border border-emerald-300/20 px-2 py-1 text-[10px] uppercase tracking-widest text-emerald-200/80">Live</span>
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">{node.label}</h3>
                  <p className="mt-2 text-xs text-slate-400">{node.subtitle}</p>
                </a>
              )
            })}
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-300">System Stack</p>
            <h2 className="mt-3 text-2xl font-black">Mission Control</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">A cleaner command layer for everything you are building, tracking, and running.</p>

            <div className="mt-6 space-y-3">
              {sideItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{item.label}</p>
                        <p className="text-xs text-slate-500">{item.value}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
