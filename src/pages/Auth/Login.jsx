import React from 'react'
import LoginForm from './components/LoginForm'
import LoginImage from './components/LoginImage'



const Login = () => {
  return (
      <div className='font-sans'>
          <div className="grain-overlay"></div>
          <div className="split-layout">
              <LoginForm />
              <LoginImage />
          </div>
    </div>
  )
}

export default Login