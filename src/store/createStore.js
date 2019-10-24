export default (reducer, initialState = {}) => {
    let currentState = initialState
    const listeners = []
    const getState = () => currentState
    const dispatch = action => {
      currentState = reducer(currentState, action)
      listeners.forEach(listener => listener())
      return action
    }
    const subscribe = listener => {
      listeners.push(listener)
      return () => {
        const index = listeners.indexOf(listener)
        if (index >= 0) {
          listeners.splice(index, 1)
        }
      }
    }
    return { getState, dispatch, subscribe }
}