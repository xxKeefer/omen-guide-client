import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Navigation/Nav'
import { Example, Home, Login, Register, Rules } from './pages/exports'
import Gate from './routes/Gate'

const App: React.FC = () => {
  // const testUser = { email: 'test', roles: ['user'] }
  const testAdmin = { email: 'test', roles: ['user', 'admin'] }
  return (
    <>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Gate
          user={null}
          role={undefined}
          exact={true}
          path={'/example'}
          component={Example}
        />
        <Gate
          user={testAdmin}
          role="admin"
          exact={true}
          path={'/rules'}
          component={Rules}
        />
      </Switch>
    </>
  )
}

export default App
