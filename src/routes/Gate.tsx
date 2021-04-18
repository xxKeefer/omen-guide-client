import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
import User from '../interfaces/Auth/User'

interface GateProps extends RouteProps {
  adminOnly?: boolean
}

const Gate = ({
  adminOnly = true,
  exact = true,
  path,
  component
}: GateProps) => {
  let location = useLocation()
  const { name, isAdmin } = useSelector<User, User>((state) => state)

  if (name === null) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />
  }

  if (adminOnly && isAdmin) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />
  }

  return <Route exact={exact} path={path} component={component} />
}

export default Gate
