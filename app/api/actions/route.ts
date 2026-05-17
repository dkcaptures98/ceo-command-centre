export const runtime = 'nodejs'

type ActionRequest = {
  action?: string
  module?: string
  task?: string
  command?: string
}

const createdAt = () => new Date().toISOString()

function buildResult({ action = 'Run action', module = 'Command Centre', task = '', command = '' }: ActionRequest) {
  const label = task || command || action

  if (action.toLowerCase().includes('create task')) {
    return {
      type: 'task_created',
      title: label,
      module,
      status: 'Created',
      createdAt: createdAt(),
      summary: `Created a new ${module} task: ${label}`,
    }
  }

  if (action.toLowerCase().includes('export')) {
    return {
      type: 'report_exported',
      title: `${module} Report`,
      module,
      status: 'Ready',
      createdAt: createdAt(),
      summary: `Generated an export-ready report for ${module}.`,
      report: [`Module: ${module}`, `Focus: ${label}`, `Generated: ${createdAt()}`].join('\n'),
    }
  }

  if (action.toLowerCase().includes('open')) {
    return {
      type: 'module_opened',
      title: module,
      module,
      status: 'Opened',
      createdAt: createdAt(),
      summary: `${module} workspace opened and loaded into the command centre.`,
    }
  }

  return {
    type: 'analysis_completed',
    title: label,
    module,
    status: 'Completed',
    createdAt: createdAt(),
    summary: `Completed ${action} for ${module}. Next step: review the module tasks and execute the highest priority item.`,
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as ActionRequest
  return Response.json(buildResult(body))
}
