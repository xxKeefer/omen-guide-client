import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm'

const Register: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <RegisterForm
        onSubmit={(values) => {
          console.log(values)
        }}
      />
    </div>
  )
}

export default Register
