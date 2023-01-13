import { Clock } from './types/types'

/**
 * Creates a clock that is immediately started.
 */
export function createClock(): Clock {
  const clock: Clock = {
    beginTime: Date.now(),
    pausedAt: 0,
    isPaused: false,
    totalTimePaused: 0,
  }

  return clock
}
