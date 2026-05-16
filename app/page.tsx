'use client'

import Link from 'next/link'
import {
  CalendarDays,
  Camera,
  ChartNoAxesCombined,
  Dumbbell,
  FolderKanban,
  Inbox,
  NotebookPen,
  Server,
} from 'lucide-react'

const nodes = [
  {
    label: 'Inbox',
    subtitle: 'Messages and follow-ups',
    href: '/inbox',
    icon: Inbox,
    angle: -90,
  },
  {
    label: 'Calendar',
    subtitle: 'Schedule and deadlines',
    href: '/calendar',
    icon: CalendarDays,
    angle: -45,
  },
  {
    label: 'Projects',
    subtitle: 'Websites, apps, builds',
    href: '/projects',
    icon: FolderKanban,
    angle: 0,
  },
  {
    label: 'Finance',
    subtitle: 'Budgets and purchases',
    href: '/finance',
    icon: ChartNoAxesCombined,
    angle: 45,
  },
  {
    label: 'Training',
    subtitle: 'S&C plans and athletes',
    href: '/training',
    icon: Dumbbell,
    angle: 90,
  },
  {
    label: 'Media',
    subtitle: 'Photos and content',
    href: '/media',
    icon: Camera,
    angle: 135,
  },
  {
    label: 'Notes',
    subtitle: 'Research and planning',
    href: '/notes',
    icon: NotebookPen,
    angle: 180,
  },
  {
    label: 'Systems',
    subtitle: 'UniFi, NAS, servers',
    href: '/systems',
    icon: Server,
    angle: 225,
  },
]

export default function HomePage() {
  const radius = 250

  return (
    <main className="min-h-screen overflow-hidden bg-[#04070f] text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.22),transparent_35%),radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_42%)]" />

        <div className="relative z-10 mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            Personal Operating System
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
            CEO Command Centre
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 md:text-base">
            A centralized dashboard for projects, systems, media, training, planning, and execution.
          </p>
        </div>

        <div className="relative hidden h-[700px] w-[700px] items-center justify-center md:flex">
          <div className="absolute h-[620px] w-[620px] rounded-full border border-emerald-300/10" />
          <div className="absolute h-[470px] w-[470px] rounded-full border border-sky-300/10" />
          <div className="absolute h-[300px] w-[300px] rounded-full border border-white/10" />

          <Link
            href="/"
            className="relative z-20 flex h-48 w-48 flex-col items-center justify-center rounded-full border border-emerald-300/40 bg-slate-950/90 shadow-[0_0_100px_rgba(34,197,94,0.5)] transition hover:scale-105"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-300">
              Core
            </span>

            <span className="mt-2 text-3xl font-black">ONLINE</span>

            <span className="mt-2 text-xs text-slate-400">
              Systems operational
            </span>
          </Link>

          {nodes.map((node) => {
            const radians = (node.angle * Math.PI) / 180
            const x = Math.cos(radians) * radius
            const y = Math.sin(radians) * radius
            const Icon = node.icon

            return (
              <Link
                key={node.label}
                href={node.href}
                className="absolute z-20 w-52 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/30">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="text-sm font-bold uppercase tracking-wide">
                  {node.label}
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  {node.subtitle}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="relative z-10 grid w-full max-w-md gap-4 md:hidden">
          {nodes.map((node) => {
            const Icon = node.icon

            return (
              <Link
                key={node.label}
                href={node.href}
                className="rounded-2xl border border-white/10 bg-slate-950/80 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-bold">{node.label}</h2>
                    <p className="text-sm text-slate-400">
                      {node.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
