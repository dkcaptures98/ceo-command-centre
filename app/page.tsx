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
    <main>
      <div className="app-shell">
        <header className="topbar">
          <div>
            <p className="kicker">Personal AI Command System</p>
            <h1 className="title">JARVIS Command Centre</h1>
            <p className="subtitle">Professional control panel for projects, systems, training, media, notes, and execution.</p>
          </div>
          <div className="status-pill">
            <span className="clock">{time}</span>
            <span className="status-text">Operational</span>
          </div>
        </header>

        <section className="dashboard-grid">
          <aside className="stack">
            <div className="panel">
              <p className="kicker">Operator</p>
              <h2 className="panel-title">Daniel OS</h2>
              <p className="panel-text">Central dashboard shell. Every module is clickable and the command interface is operational.</p>
            </div>

            <div className="diag-grid">
              {diagnostics.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="diag-card">
                    <Icon size={22} />
                    <p className="diag-label">{item.label}</p>
                    <p className="diag-value">{item.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="panel">
              <div className="command-title">
                <TerminalSquare size={26} />
                <h3>Command Feed</h3>
              </div>
              <div className="log-list">
                {logs.map((log, index) => (
                  <div key={`${log}-${index}`} className="log-row">
                    <span className="prompt">›</span>{log}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="main-panel">
            <div className="center-grid">
              <div className="core-stage">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
                <div className="core-orb">
                  <div>
                    <Sparkles size={48} />
                    <p className="core-label">Neural Core</p>
                    <h2 className="core-name">JARVIS</h2>
                    <p className="core-copy">Ready for operator command.</p>
                  </div>
                </div>
              </div>

              <div className="active-panel">
                <p className="kicker">Active Module</p>
                <h2 className="active-title">{active.label}</h2>
                <p className="panel-text">{active.text}</p>
                <div className="metric-box">
                  <div className="metric-label">Current Metric</div>
                  <div className="metric-value">{active.value}</div>
                </div>
                <div className="task-list" style={{ marginTop: 18 }}>
                  {active.tasks.map((task) => (
                    <div key={task} className="task-row">
                      <CheckCircle2 size={20} />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="module-grid">
              {modules.map((module) => {
                const Icon = module.icon
                const selected = active.label === module.label
                return (
                  <button key={module.label} onClick={() => setActive(module)} className={`module-card ${selected ? 'active' : ''}`}>
                    <div className="module-top">
                      <Icon size={24} />
                      <span className="module-value">{module.value}</span>
                    </div>
                    <p className="module-name">{module.label}</p>
                    <p className="module-text">{module.text}</p>
                  </button>
                )
              })}
            </div>
          </section>

          <aside className="stack">
            <div className="command-box">
              <div className="command-input">
                <Search size={20} />
                <input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && runCommand(command)} placeholder="Ask JARVIS anything..." />
              </div>
              <button onClick={() => runCommand(command)} className="execute-button">
                <Play size={18} /> Execute Command
              </button>
            </div>

            <div className="panel">
              <div className="task-title">
                <Activity size={24} />
                <h3>Module Actions</h3>
              </div>
              <div className="action-list">
                {['Open module', 'Run analysis', 'Create task', 'Export report'].map((action) => (
                  <button key={action} onClick={() => runCommand(action)} className="action-button">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="task-title">
                <Activity size={24} />
                <h3>Live Telemetry</h3>
              </div>
              {[72, 48, 91, 64, 83].map((width, index) => (
                <div key={index} className="telemetry-row">
                  <div className="telemetry-label"><span>Signal {index + 1}</span><span>{width}%</span></div>
                  <div className="bar"><div className="bar-fill" style={{ width: `${width}%` }} /></div>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
