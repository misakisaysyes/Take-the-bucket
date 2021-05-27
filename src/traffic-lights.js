import React, { useState, useEffect } from 'react'
import './index.css'

const wait = time => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
})

const TrafficLightsControllor = props => {
    const { lights } = props  
    const [lightsView, setLightsView] = useState([])

    useEffect(() => {
        walkLights(lights)
    }, [])

    const makeView = (idx, color) => 
        lights.map((light, cur) => {
            if(cur === idx) { return !color ? light.color: color }
            return 'black'
        })

    const walkLights = async () => {
        let index = 0
        while(true) {
            const idx = index%lights.length

            if(lights[idx]) {
                const { color, duration, twinkleDuration } = lights[idx]

                // 灯亮
                let activeTime = duration - (twinkleDuration ? twinkleDuration : 0)
                setLightsView(makeView(idx, color))
                await wait(activeTime)

                // 闪烁
                if(twinkleDuration) {
                    let gutter = 500
                    let twinkleTime = twinkleDuration / gutter
                    while(twinkleTime--) {
                        if(twinkleTime%2 === 0) {
                            setLightsView(makeView(idx))
                        } else {
                            setLightsView(makeView(idx, 'black'))
                        }
                        await wait(gutter)
                    }
                }
            }
            index++
        }
    }

    return (
        <div className="traffic-lights">
            {
                lightsView.map((color, idx) => <div key={idx} className="light" style={{ backgroundColor: color }}></div>)
            }
        </div>
    )
}

export default TrafficLightsControllor