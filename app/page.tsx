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
  const [aiResponse, setAiResponse] = useState('Select a module or ask a question. Real AI responses will appear here once OPENAI_API_KEY is set in Vercel.')
  const [logs, setLogs] = useState(['System loaded', 'Interface visible', 'Modules online', 'AI route connected'])
  const [isThinking, setIsThinking] = useState(false)

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  async function askJarvis(message: string) {
    const clean = message.trim() || `Analyze ${active.label}`
    setIsThinking(true)
    setAiResponse('JARVIS is thinking...')
    setLogs((current) => [`Sent to AI: ${clean}`, ...current].slice(0, 8))

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: clean, module: active.label }),
      })

      const data = await response.json()
      const reply = data?.reply || 'No AI response returned.'
      setAiResponse(reply)
      setLogs((current) => [`AI responded in ${active.label}`, ...current].slice(0, 8))
    } catch {
      setAiResponse('The AI request failed. Check Vercel logs and confirm the /api/chat route deployed successfully.')
      setLogs((current) => ['AI request failed', ...current].slice(0, 8))
    } finally {
      setIsThinking(false)
      setCommand('')
    }
  }

  function selectModule(module: typeof modules[number]) {
    setActive(module)
    setAiResponse(`${module.label} module selected. Ask JARVIS what to do next, or press one of the task/action buttons.`)
    setLogs((current) => [`Opened ${module.label} module`, ...current].slice(0, 8))
  }

  return (
    <main className="hud-root">
      <div className="hud-shell">
        <header className="hud-header">
          <div className="brand-block">
            <p className="eyebrow">Personal AI Command System</p>
            <h1>JARVIS Command Centre</h1>
            <p>Professional operating dashboard with real AI chat through your Next.js API route.</p>
          </div>
          <div className="time-card">
            <span>{time}</span>
            <small>{isThinking ? 'Thinking' : 'Operational'}</small>
          </div>
        </header>

        <section className="hud-grid">
          <aside className="left-rail">
            <div className="hud-panel operator-card">
              <p className="eyebrow">Operator</p>
              <h2>Daniel OS</h2>
              <p>Select a module, ask a question, or press an action. Commands now call the real AI route.</p>
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
                  <span>{isThinking ? 'Processing command...' : `${active.label} online`}</span>
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
                {active.tasks.map((task) => <button key={task} onClick={() => askJarvis(`Give me a practical action plan for: ${task}`)} className="task-item"><CheckCircle2 size={18} />{task}</button>)}
              </div>
            </div>

            <div className="hud-panel command-panel">
              <div className="command-input"><Search size={20} /><input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && askJarvis(command)} placeholder="Ask JARVIS anything..." /></div>
              <button disabled={isThinking} onClick={() => askJarvis(command)}><Play size={18} />{isThinking ? 'Thinking...' : 'Ask AI'}</button>
            </div>

            <div className="hud-panel action-panel">
              <div className="section-title"><Activity size={24} /><h3>Actions</h3></div>
              {['Open module', 'Run analysis', 'Create task', 'Export report'].map((action) => <button key={action} onClick={() => askJarvis(`${action} for ${active.label}. Give me the actual next steps.`)}>{action}</button>)}
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
