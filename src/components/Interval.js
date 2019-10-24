import React from 'react'

export default ({ currentInterval, timerTicking, changeInterval }) => (
      <div>
        <span>Интервал обновления секундомера: {currentInterval} сек.</span>
        <span>
          <button disabled={!currentInterval || timerTicking} onClick={() => changeInterval(-1)}>-</button>
          <button disabled={timerTicking} onClick={() => changeInterval(1)}>+</button>
        </span>
      </div>
)
