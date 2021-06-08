import { combineReducers } from 'redux'
import dogReducer from './dogReducer'
import actionsReducer from './actionsReducer'

const rootReducer = combineReducers({
    dogReducer,
    actionsReducer
})

export default rootReducer