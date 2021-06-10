import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addAction} from '../../actions/dogActions'
// import {dogReducer} from '..'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            time: '',
            description: '',
            mood: '',
            dog_id: '' 
        }
    }

   handleChange = event => {
       const { name, value } = event.target;
       this.setState({
           [name]: value
       })
   }

   onFormSubmit = event => {
       console.log("submit")
       event.preventDefault();
    //    const activity = {...this.state}
       const activity = {
           mood: this.state.mood,
           name: this.state.name,
           time:  this.state.time,
           description:  this.state.description,
           dog_id: this.props.id
       }
        console.log(activity)
        console.log(this.props.id)
        this.props.addAction(activity, this.props.id)
        this.setState({
            mood:"",
            name: "",
            time:  "",
            description:"",
            dog_id: ""
        });
    //    dispatch(addAction(activity, this.props.id))
    // addAction(activity, this.props.id)


    //    this.props.addAction(activity, this.props.id)
   }

   render() {
       const {mood, name, time, description } = this.state;

        return (       
            <form onSubmit={this.onFormSubmit}>
                <label>Mood:</label>
                <input type="text" 
                            name="mood" 
                            id="mood"
                            value={mood} 
                            onChange={this.handleChange}/>
                <label>Category:</label>
                <input type="text" 
                            name="name" 
                            id="name"
                            value={name} 
                            onChange={this.handleChange}/>
                <label>Time(hh:mm):</label>
                <input type="text" 
                            name="time" 
                            id="time"
                            value={time} 
                            onChange={this.handleChange}/>
                <label>Description:</label>
                <input type="text" 
                            name="description" 
                            id="description"
                            value={description} 
                            onChange={this.handleChange}/> 
                <button type="submit">Submit</button>  
            </form>
       
       )
   }
}
const mapDispatchToProps = dispatch => {
    return {
        addAction: (activity, dogId) => 
        dispatch(addAction(activity, dogId)), dispatch
    }
}


export default connect(null, mapDispatchToProps)(Form);