export default function dogReducer(state = {dogs: [], value: ''}, action) {
    switch(action.type){
        case "LOADING_DOGS":
            return {
                ...state,
               
            }
        case "DOGS_LOADED":
            return {
                dogs: action.payload             
            }
        case "ADD_DOG":
            return {
                ...state
            }

        case "DOG_ADDED":
            return {
                ...state,
                dogs: [...state.dogs, action.payload]
            }  
            
        case "ADD_ACTION":
            return{
                ...state
            }
        case "ACTION_ADDED":
            
            
            let dog = state.dogs.filter(dog => dog.id == action.payload.dog_id)[0]
            
            let newAction = {
                ...dog,
               dog_actions: [...dog.dog_actions, action.payload]
            }

            let dogs = state.dogs.filter(dog => dog.id !== action.payload.dog_id)

            return{
                ...state,
                dogs: [...dogs, newAction]
              
            }

        default:
            return state
    }
}