// internal logging utility
function log(level: string, message: string): void {
  const timestamp: string = new Date().toISOString()
  console.log(`[${timestamp}] [${level}] ${message}`)
}

export function logInfo(message: string): void {
  log('INFO', message)
}

export function logError(message: string): void {
  log('ERROR', message)
}