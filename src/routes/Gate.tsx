import { useAuth } from '../contexts/AuthProvider'
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
interface GateProps extends RouteProps {
  roles?: string[]
}

const Gate = ({
  roles = ['authenticated'],
  exact = true,
  path,
  component
}: GateProps) => {
  let location = useLocation()
  const { user } = useAuth()
  console.log(user?.role)

  if (!user?.name || !user?.email) {
    return <Redirect to={{ pathname: '/example', state: { from: location } }} />
  }

  if (roles && roles.includes(user!.role)) {
    return <Route exact={exact} path={path} component={component} />
  }

  return <Redirect to={{ pathname: '/', state: { from: location } }} />
}

export default Gate
