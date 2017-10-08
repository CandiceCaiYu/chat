import React from 'react'

import './styles.less'

export default class Login extends React.Component {
  render() {
    return(
      <div className="chat-login">
        <div className="chat-login-panel">
          <p className="chat-login-info">请输入您的用户名：</p>
          <input className="chat-login-user-name" name="user-name" placeholder="用户名..."  />
          <div className="chat-login-send">
            <button className="chat-login-btn chat-login-signIn">登录</button>
            <button className="chat-login-btn chat-login-signOut">退出</button>
          </div>
        </div>
      </div>
    )
  }
}