import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
