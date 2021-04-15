import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Example, Home, Login, Register, Rules } from './pages/exports'
import Gate from './routes/Gate'

const App: React.FC = () => {
  // const testUser = { email: 'test', roles: ['user'] }
  const testAdmin = { email: 'test', roles: ['user', 'admin'] }
  return (
    <Router>
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
          user={{ email: 'test', roles: ['user', 'admin'] }}
          role="admin"
          exact={true}
          path={'/rules'}
          component={Rules}
        />
      </Switch>
    </Router>
  )
}

export default App
