import { useAuth } from '../contexts/AuthProvider'
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
import { Example } from '../pages/exports'
interface GateProps extends RouteProps {
  roles?: string[]
}

const Gate = ({ roles, exact, path, component }: GateProps) => {
  let location = useLocation()
  const { user } = useAuth()

  if (roles && roles.includes(user.role)) {
    return <Route exact={exact} path={path} component={component} />
  }

  if (user.name || user.email) {
    return <Route exact={exact} path={path} component={Example} />
  }

  return <Redirect to={{ pathname: '/', state: { from: location } }} />
}

export default Gate
