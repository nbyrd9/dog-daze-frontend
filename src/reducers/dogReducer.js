export default (state = {dogs: [], loading:false, value: ''}, action) => {
    switch(action.type){
        case "LOADING_DOGS":
            return {
                ...state,
                loading: true
            }
        case "DOGS_LOADED":
            return {
                dogs: action.payload,
                loading: false
            }
            case "ADD_DOG":
                return {
                    ...state,
                    loading: true
                }
        case "DOG_ADDED":
            return {
                ...state,
                dogs: [...state.dogs, action.payload],
                loading: false
            }  
            
        case "ADD_ACTIVITY":
            return{
                ...state,
                loading: true
            }
        case "ACTIVITY_ADDED":
            let dog = state.dogs.filter(dog => dog.id === action.payload.dog_id)[0]
            let newAction = {
                ...dog,
               dog_actions: [...dog.dog_actions, action.payload]
            }

            let dogs = state.dogs.filter(dog => dog.id !== action.payload.dog_id)

            return{
                ...state,
                dogs: [...dogs, newAction],
                loading: false
            }

        default:
            return state
    }
}