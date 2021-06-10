export const getDogs = () => {
    return function (dispatch) {
       dispatch({type: "LOADING_DOGS"}) 
       return fetch(`http://localhost:3001/dogs`)
       .then(res => res.json())
       .then(dogs => dispatch({type: "DOGS_LOADED", payload: dogs}))
       .catch(error => {
        throw(error);
    }) 
    }
}

export const addDog = (dog) => {

    return function (dispatch) {
        dispatch({type: "ADD_DOG"}, dog)
        return fetch(`http://localhost:3001/dogs`, {
            method: "POST",
            body: JSON.stringify(dog),
            headers: { 
                'Content-Type':  'application/json'
            }
        })
         .then(res => res.json())
         .then(dog => {
             return dispatch({ type: "DOG_ADDED", payload: dog })
         })  
    }
}