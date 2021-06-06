export const getDogActions = (dogId) => {
    return (dispatch) => {
       dispatch({type: "LOADING_ACTIVITIES"}) 
       return fetch(`http://localhost:3000/dogs/${dogId}`)
       .then(res => res.json())
       .then(dog => dispatch({type: "ACTIVITIES_LOADED", payload: dog}))
       .catch(error => {
        throw(error);
        }) 
    }
}

export const addActivity = (activity, dogId) => {
    return(dispatch) => {
        dispatch({type: "ADD_ACTIVITY"}, activity)
        return fetch(`http://localhost:3000/dogs/${dogId}/daily_activities`, {
            method: "POST",
            body: JSON.stringify(activity),
            headers: { 
                'Content-Type':  'application/json'
            }
        })
        .then(res => res.json())
        .then(activity => {
            return dispatch({type: "ACTIVITY_ADDED", payload: activity})
        })
    }
}