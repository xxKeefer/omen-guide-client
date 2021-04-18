import AuthState from '../../interfaces/Auth/Auth'

const initialState: AuthState = {
  name: null,
  email: null,
  isAdmin: null
}

type Action = { type: 'AUTHENTICATE_USER'; payload: AuthState }

// const actionIs = { authenticate_user: "AUTHENTICATE_USER" }

export default (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      console.log('REDUX-=-=-=-=-=-=> ', { action })
      return { ...state, ...action.payload }

    default:
      return state
  }
}
