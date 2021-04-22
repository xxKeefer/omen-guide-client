import User from '../../interfaces/Auth/User'

const initialState: User = {
  name: null,
  email: null,
  role: 'public'
}

type Action = { type: 'AUTHENTICATE_USER'; payload: User }

// const actionIs = { authenticate_user: "AUTHENTICATE_USER" }

export default (state: User = initialState, action: Action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      console.log('REDUX-=-=-=-=-=-=> ', { action })
      return { ...state, ...action.payload }

    default:
      return state
  }
}
