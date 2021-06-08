import React from 'react'
import { connect } from 'react-redux'
import { addDog } from '../actions/dogs'

class DogInput extends React.Component {
    state={
       name: '',
       age: '',
       breed: '',
       loading: false
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const dog = {...this.state}
        this.props.addDog(dog)
        this.setState({
            name: '',
            age: '',
            breed: '',
        })
       
    }

    render() {
        return (
            <div>
                <br></br>
                <h2>Add a Dog</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Dog's Name:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleOnChange}
                    />
                    <label>Age(years):</label>
                    <input
                        type="text"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleOnChange}
                    />
                    <label>Breed:</label>
                    <input
                        type="text"
                        value={this.state.breed}
                        name="breed"
                        onChange={this.handleOnChange}
                    />
                
                    <button type="submit">Add Dog</button>
                
                </form>
            </div>
        )
    }
}


export default connect(null, {addDog})(DogInput);