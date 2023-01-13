import { Clock } from './types/types'

/**
 * Returns a duration in milliseconds.
 */
export function getTimePassed(clock: Clock): number {
  if (!clock.isPaused) {
    return Date.now() - clock.beginTime - clock.totalTimePaused
  } else {
    // `totalTimePaused` has not been updated yet
    // for the current pausing cycle,
    // therefore have to take that into account.
    const currentTimePaused = Date.now() - clock.pausedAt
    return Date.now()
      - clock.beginTime
      - clock.totalTimePaused
      - currentTimePaused
  }
}
