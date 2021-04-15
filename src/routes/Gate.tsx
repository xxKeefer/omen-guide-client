import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
import UserInterface from '../interfaces/user'

interface GateProps extends RouteProps {
  user: UserInterface | null
  role: string | undefined
}

const Gate = ({ user, role, exact, path, component }: GateProps) => {
  let location = useLocation()

  if (!user) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />
  }

  if (role && !user.roles.includes(role)) {
    return <Redirect to={{ pathname: '/home', state: { from: location } }} />
  }

  return <Route exact={exact} path={path} component={component} />
}

export default Gate
