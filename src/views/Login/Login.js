import React, { Component } from 'react'

import LoginForm from './LoginForm'

export class Login extends Component {
  render () {
    return (
      <div className='container'>
        <div className='page-header'>
            <h2>SGX Admin Login</h2>
        </div>
        <p>Please login to administer SGX</p>
      </div>
    )
  }
}

// export default Login
