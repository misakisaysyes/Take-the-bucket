import React from 'react'
import TrafficLightsControllor from './traffic-lights'

const App = () => {
  return (
    <div>
      <div>
        每天一个提桶小技巧
      </div>
      <TrafficLightsControllor lights={[
        { color: 'red', duration: 20000, twinkleDuration: 5000 },
        { color: 'green', duration: 20000, twinkleDuration: 5000 },
        { color: 'yellow', duration: 10000 },
      ]}/>
    </div>
  )
}

export default App