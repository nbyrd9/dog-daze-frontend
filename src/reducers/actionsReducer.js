export default function actionsReducer (state = {dailyActions: []}, action) {
    switch(action.type){
        case "LOADING_ACTIONS":
            return {
                ...state,
                
            }
        case "ACTIONS_LOADED":
            return {
                ...state,
                dailyActions: action.payload,
               
            }

        default:
            return state
    }
}