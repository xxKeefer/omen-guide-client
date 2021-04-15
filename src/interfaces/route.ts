export default interface RouteInterface {
  path: string
  name: string
  component: any
  exact: boolean
  props?: any
}
