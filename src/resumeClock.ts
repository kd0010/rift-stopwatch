import { Clock } from './types/types'

export function resumeClock(clock: Clock): Clock {
  if (!clock.isPaused) {
    return clock
  } else {
    return {
      ...clock,
      totalTimePaused: clock.totalTimePaused + Date.now() - clock.pausedAt,
      pausedAt: 0,
      isPaused: false,
    }
  }
}
