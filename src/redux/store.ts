import { createStore } from 'redux'
import authReducer from './auth/reducer'

export const store = createStore(authReducer)
