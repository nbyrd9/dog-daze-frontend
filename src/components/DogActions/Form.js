import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addAction} from '../../actions/dogActions'

class Form extends Component {

    state= {
        name: '',
        time: '',
        description: '',
        mood: '',
        dog_id: '' 
    }

   handleChange = event => {
       const { name, value } = event.target;
       this.setState({
           [name]: value
       })
   }

   onFormSubmit = event => {
    //    debugger
       console.log("submit")
       event.preventDefault();
       const activity = {...this.state}

       this.props.addAction(activity, this.props.id)
       this.setState({
        mood: '',
        name: '',
        time: '',
        description: ''
       });
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
                <label>Type:</label>
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


export default connect(null, {addAction})(Form);