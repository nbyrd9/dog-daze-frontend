export const getDogActions = (dogId) => {
    return (dispatch) => {
       dispatch({type: "LOADING_ACTIVITIES"}) 
       return fetch(`http://localhost:3001/dogs/${dogId}`)
       .then(res => res.json())
       .then(dog => dispatch({type: "ACTIONS_LOADED", payload: dog}))
       .catch(error => {
        throw(error);
        }) 
    }
}

export const addAction = (activity, dogId) => {
    // debugger
    return (dispatch) => {
        // dispatch({type: "ADD_ACTION"}, action) 
        fetch(`http://localhost:3001/dogs/${dogId}/dog_actions`, {
            method: "POST",
            body: JSON.stringify(activity),
            headers: { 
                'Content-Type':  'application/json'
            }
        })
        .then(res => {res.json()})
        
        .then(activity => {
            debugger
            return dispatch({type: "ACTION_ADDED", payload: activity})
        })
    }
}