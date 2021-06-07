import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/DogActions/Form'


class DogActions extends React.Component {

    render (){
    
        let dog = this.props.dogs.find(dog => dog.id == this.props.match.params.dogId)
        if (dog) { 
        const actionsList = dog.dog_actions.map((action, i) => <p key={i}><strong>Mood:</strong>{action.mood}<br/><strong>Time: </strong>{action.time}<br/>
        <br/><strong>Name:</strong> {action.name}<br/><br/><strong>Description: </strong>{action.description}<br/> </p>)

        const action = actionsList.length === 0 ? <i>No Actions Listed</i> : actionsList


        return(
            <div>
            <h2>{dog.name}'s Activities</h2>
             <div>
             </div>
                {action}  
          
                <strong><h3>Add a New Action</h3></strong>
                <br></br>
                <Form id={this.props.match.params.dogId}/> 
            </div>
        )
        } else {
            return null
        }

    }
}

const mapStateToProps = state => {
    
    return{
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps)(DogActions);