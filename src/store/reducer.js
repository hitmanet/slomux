import { CHANGE_INTERVAL, TOGGLE_TIMER } from './actions'

export default (state, { type, payload }) => {
    switch(type) {
      case CHANGE_INTERVAL:
        return {
          ...state,
          currentInterval: state.currentInterval += payload
        }
      case TOGGLE_TIMER:
        return {
          ...state,
          timerTicking: !state.timerTicking
        }
      default:
        return state
    }
}