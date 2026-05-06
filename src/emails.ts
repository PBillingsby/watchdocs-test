export async function cancelEmail(id: string): Promise<void> {
  await fetch(`/emails/${id}`, { method: 'DELETE' })
}

export async function sendEmail(params: {
  from: string
  to: string
  subject: string
  text?: string
  scheduledAt?: string
}): Promise<void> {
  await fetch('/emails', {
    method: 'POST',
    body: JSON.stringify(params)
  })
}

export async function listScheduledEmails(): Promise<void> {
  await fetch('/emails/scheduled', { method: 'GET' })
}