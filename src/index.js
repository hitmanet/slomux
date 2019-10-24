import React from 'react'
import ReactDOM from 'react-dom'
import StoreContext from './Provider'
import createStore from './store/createStore'
import reducer from './store/reducer'
import Timer from './containers/Timer'
import * as serviceWorker from './serviceWorker'

const initialState = {
    currentInterval: 0,
    timerTicking: false
}

ReactDOM.render(
    <StoreContext.Provider value={createStore(reducer, initialState)}>
        <Timer/>
    </StoreContext.Provider>,
document.getElementById('root'))

serviceWorker.unregister()
