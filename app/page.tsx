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

function fakeAiResponse(module: string, command: string) {
  return `JARVIS response: I processed "${command}" inside the ${module} module. Next step: review the highlighted task stack, then use Export Report or Create Task to continue the workflow.`
}

export default function HomePage() {
  const [time, setTime] = useState('')
  const [active, setActive] = useState(modules[0])
  const [command, setCommand] = useState('')
  const [aiResponse, setAiResponse] = useState('Select a module or run a command. Responses will appear here.')
  const [logs, setLogs] = useState(['System loaded', 'Interface visible', 'Modules online', 'Command input ready'])

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  function selectModule(module: typeof modules[number]) {
    setActive(module)
    setAiResponse(`JARVIS response: ${module.label} module opened. I found ${module.value} active items. Recommended focus: ${module.tasks[0]}.`)
    setLogs((current) => [`Opened ${module.label} module`, ...current].slice(0, 8))
  }

  function runCommand(text: string) {
    const clean = text.trim() || `Analyze ${active.label}`
    setAiResponse(fakeAiResponse(active.label, clean))
    setLogs((current) => [`${active.label}: ${clean}`, 'Command executed successfully', ...current].slice(0, 8))
    setCommand('')
  }

  return (
    <main className="hud-root">
      <div className="hud-shell">
        <header className="hud-header">
          <div className="brand-block">
            <p className="eyebrow">Personal AI Command System</p>
            <h1>JARVIS Command Centre</h1>
            <p>Professional operating dashboard for projects, systems, training, media, notes, and execution.</p>
          </div>
          <div className="time-card">
            <span>{time}</span>
            <small>Operational</small>
          </div>
        </header>

        <section className="hud-grid">
          <aside className="left-rail">
            <div className="hud-panel operator-card">
              <p className="eyebrow">Operator</p>
              <h2>Daniel OS</h2>
              <p>Central control shell. Select a module, execute commands, and monitor system state.</p>
            </div>

            <div className="diagnostic-grid">
              {diagnostics.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="diagnostic-card">
                    <Icon size={22} />
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                )
              })}
            </div>

            <div className="hud-panel feed-panel">
              <div className="section-title"><TerminalSquare size={24} /><h3>Command Feed</h3></div>
              <div className="feed-list">
                {logs.map((log, index) => <div key={`${log}-${index}`} className="feed-row"><span>›</span>{log}</div>)}
              </div>
            </div>
          </aside>

          <section className="center-console">
            <div className="main-stage">
              <div className="tech-frame frame-top" />
              <div className="tech-frame frame-bottom" />
              <div className="radar-grid">
                <div className="ring r1" />
                <div className="ring r2" />
                <div className="ring r3" />
                <div className="ring r4" />
                <div className="crosshair h" />
                <div className="crosshair v" />
                <div className="jarvis-core">
                  <Sparkles size={50} />
                  <small>Neural Core</small>
                  <strong>JARVIS</strong>
                  <span>{active.label} online</span>
                </div>
              </div>
            </div>

            <div className="hud-panel ai-output">
              <div className="section-title"><Sparkles size={22} /><h3>AI Response</h3></div>
              <p>{aiResponse}</p>
            </div>

            <div className="module-dock">
              {modules.map((module) => {
                const Icon = module.icon
                const selected = active.label === module.label
                return (
                  <button key={module.label} onClick={() => selectModule(module)} className={`dock-card ${selected ? 'selected' : ''}`}>
                    <div><Icon size={24} /><span>{module.value}</span></div>
                    <strong>{module.label}</strong>
                    <p>{module.text}</p>
                  </button>
                )
              })}
            </div>
          </section>

          <aside className="right-rail">
            <div className="hud-panel active-card">
              <p className="eyebrow">Active Module</p>
              <h2>{active.label}</h2>
              <p>{active.text}</p>
              <div className="metric-card"><small>Current Metric</small><strong>{active.value}</strong></div>
              <div className="task-list">
                {active.tasks.map((task) => <button key={task} onClick={() => runCommand(`Work on ${task}`)} className="task-item"><CheckCircle2 size={18} />{task}</button>)}
              </div>
            </div>

            <div className="hud-panel command-panel">
              <div className="command-input"><Search size={20} /><input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && runCommand(command)} placeholder="Ask JARVIS anything..." /></div>
              <button onClick={() => runCommand(command)}><Play size={18} />Execute Command</button>
            </div>

            <div className="hud-panel action-panel">
              <div className="section-title"><Activity size={24} /><h3>Actions</h3></div>
              {['Open module', 'Run analysis', 'Create task', 'Export report'].map((action) => <button key={action} onClick={() => runCommand(action)}>{action}</button>)}
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
