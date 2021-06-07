export default function actionsReducer (state = {dailyActions: [], loading:false}, action) {
    switch(action.type){
        case "LOADING_ACTIVITIES":
            return {
                ...state,
                loading: true
            }
        case "ACTIVITIES_LOADED":
            return {
                ...state,
                dailyActions: action.payload,
                loading: false
            }

        default:
            return state
    }
}