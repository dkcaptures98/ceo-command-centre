import OpenAI from 'openai'

export const runtime = 'nodejs'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const message = String(body?.message || '').trim()
    const module = String(body?.module || 'Command Centre')

    if (!message) {
      return Response.json({ reply: 'Give me a command or question and I will respond.' })
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        reply:
          'AI backend is not connected yet. Add OPENAI_API_KEY in Vercel Project Settings → Environment Variables, then redeploy. Until then, this interface can only simulate responses.',
      })
    }

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are JARVIS, a practical personal AI command assistant inside a CEO command centre web app. Be direct, useful, and action-oriented. Help with planning, writing, project decisions, technical troubleshooting, training plans, media workflows, scheduling, and organizing tasks. Do not claim you completed external actions unless the app has an integration for it. When useful, give concrete next steps.',
        },
        {
          role: 'user',
          content: `Current module: ${module}\nUser command: ${message}`,
        },
      ],
      temperature: 0.5,
    })

    return Response.json({ reply: completion.choices[0]?.message?.content || 'No response generated.' })
  } catch (error) {
    return Response.json(
      { reply: 'AI request failed. Check the Vercel function logs and confirm OPENAI_API_KEY is set correctly.' },
      { status: 500 },
    )
  }
}
