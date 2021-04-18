import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Navigation/Nav'
import { Example, Home, Login, Register, Rules } from './pages/exports'
import Gate from './routes/Gate'
import AuthInterface from './interfaces/Auth/Auth'

const App: React.FC = () => {
  return (
    <>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Gate path="/example" component={Example} />
        <Gate adminOnly path="/rules" component={Rules} />
      </Switch>
    </>
  )
}

export default App
