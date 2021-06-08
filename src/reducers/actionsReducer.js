export default function actionsReducer (state = {dailyActions: [], loading:false}, action) {
    switch(action.type){
        case "LOADING_ACTIONS":
            return {
                ...state,
                loading: true
            }
        case "ACTIONS_LOADED":
            return {
                ...state,
                dailyActions: action.payload,
                loading: false
            }

        default:
            return state
    }
}