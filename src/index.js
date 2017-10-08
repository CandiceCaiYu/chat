import React from 'react'
import ReactDOM from 'react-dom'
import Login from './component/login/index.js'

import './styles/common.less'

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)