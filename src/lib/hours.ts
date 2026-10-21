import { hours } from '../config'

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

function nowInBrasilia() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) }
}

export function isOpenNow(): boolean {
  const { day, minutes } = nowInBrasilia()
  const yesterday = (day + 6) % 7
  return hours.some((h) => {
    if (!h.open || !h.close) return false
    const open = toMinutes(h.open)
    const close = toMinutes(h.close)
    const crossesMidnight = close <= open
    if (h.day === day) return minutes >= open && (crossesMidnight || minutes < close)
    if (h.day === yesterday && crossesMidnight) return minutes < close
    return false
  })
}

export function todayIndex() {
  return nowInBrasilia().day
}

export const formatTime = (hhmm: string) => hhmm.replace(':00', 'h').replace(':', 'h')
