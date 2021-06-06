export const getDogActions = (dogId) => {
    return (dispatch) => {
       dispatch({type: "LOADING_ACTIVITIES"}) 
       return fetch(`http://localhost:3000/dogs/${dogId}`)
       .then(res => res.json())
       .then(dog => dispatch({type: "ACTIONS_LOADED", payload: dog}))
       .catch(error => {
        throw(error);
        }) 
    }
}

export const addAction = (action, dogId) => {
    return(dispatch) => {
        dispatch({type: "ADD_action"}, action)
        return fetch(`http://localhost:3000/dogs/${dogId}/dog_actions`, {
            method: "POST",
            body: JSON.stringify(action),
            headers: { 
                'Content-Type':  'application/json'
            }
        })
        .then(res => res.json())
        .then(action => {
            return dispatch({type: "ACTION_ADDED", payload: action})
        })
    }
}