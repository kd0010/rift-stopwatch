import { Clock } from './types/types'

export function pauseClock(clock: Clock): Clock {
  if (clock.isPaused) {
    return clock
  } else {
    return {
      ...clock,
      pausedAt: Date.now(),
      isPaused: true,
    }
  }
}
