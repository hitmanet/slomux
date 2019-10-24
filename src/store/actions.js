export const CHANGE_INTERVAL = 'CHANGE_INTERVAL'
export const TOGGLE_TIMER = 'TOGGLE_TIMER'

// action creators
export const changeInterval = payload => ({
  type: CHANGE_INTERVAL,
  payload,
})

export const toggleTimer = () => ({
  type: TOGGLE_TIMER,
})