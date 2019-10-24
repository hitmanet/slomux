import React, { useState, useEffect } from 'react'
import Interval from '../components/Interval'
import connect from '../store/connect'
import { toggleTimer, changeInterval } from '../store/actions'


const Timer = ({ timerTicking, toggleTimer, currentInterval, changeInterval}) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(currentTime => currentTime + currentInterval),
      currentInterval * 1000
    )
    return () => {
      clearInterval(interval)
    }
  }, [timerTicking])

  const handleStop = () => {
    toggleTimer()
    setCurrentTime(0)
    changeInterval(-currentInterval)
  }

  return (
    <div>
      <Interval
        currentInterval={currentInterval}
        timerTicking={timerTicking}
        changeInterval={changeInterval}/>
      <div>
        Секундомер: {currentTime} сек.
      </div>
      <div>
        <button disabled={timerTicking} onClick={toggleTimer}>Старт</button>
        <button disabled={!timerTicking} onClick={handleStop}>Стоп</button>
      </div>
    </div>
  )
}


export default connect(({ currentInterval, timerTicking }) => ({
  currentInterval,
  timerTicking
}), (dispatch) => ({
  toggleTimer: (value) => dispatch(toggleTimer(value)),
  changeInterval: (value) => dispatch(changeInterval(value))
}))(Timer)