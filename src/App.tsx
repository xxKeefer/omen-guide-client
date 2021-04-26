import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Navigation/Nav/Nav'
import {
  Example,
  Home,
  Login,
  Register,
  Rules,
  Construction
} from './pages/exports'
import Gate from './routes/Gate'
import keys from './routes/GateKeys'

const App: React.FC = () => {
  return (
    <>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Gate path="/example" component={Example} />
        <Gate roles={keys.omen} path="/omen" component={Construction} />
        <Gate roles={keys.rules} path="/rules" component={Rules} />
      </Switch>
    </>
  )
}

export default App
