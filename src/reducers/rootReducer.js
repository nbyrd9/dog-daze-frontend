import { combineReducers } from 'redux'
import dogReducer from './dogReducer'

const rootReducer = combineReducers({
    dogReducer,
    // actionsReducer
})

export default rootReducer