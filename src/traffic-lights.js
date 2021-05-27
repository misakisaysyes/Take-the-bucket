import React, { useState, useEffect } from 'react'
import './index.css'

/** 1. 信号灯控制器
用 React 实现一个信号灯（交通灯）控制器，要求：
1. 默认情况下，
  1.1. 红灯亮20秒，并且最后5秒闪烁
  1.2. 绿灯亮20秒，并且最后5秒闪烁
  1.3. 黄灯亮10秒
  1.4. 次序为 红-绿-黄-红-绿-黄
2. 灯的个数、颜色、持续时间、闪烁时间、灯光次序都可配置，如：
   lights=[{color: '#fff', duration: 10000, twinkleDuration: 5000}, ... ]
*/

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
        <div>
            <div className="traffic-lights">
                {
                    lightsView.map((color, idx) => <div key={idx} className="light" style={{ backgroundColor: color }}></div>)
                }
            </div>
        </div>
    )
}

export default TrafficLightsControllor