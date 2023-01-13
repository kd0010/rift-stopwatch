export interface Clock {
  /**
   * Millisecond-timestamp.
   */
  beginTime: number
  /**
   * Millisecond-timestamp.
   */
  pausedAt: number
  /**
   * Whether the clock is paused right now.
   */
  isPaused: boolean
  /**
   * Duration in milliseconds of the total time
   * that the clock has spent being paused.
   */
  totalTimePaused: number
}
