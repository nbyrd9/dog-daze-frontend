import React from 'react'
import { connect } from 'react-redux'
import Form from '../components/DogActions/Form'


class DogActions extends React.Component {

    render (){
    
        let dog = this.props.dogs.filter(dog => dog.id === this.props.match.params.dogId)[0]
        const actionsList = dog.dog_actions.map((action, i) => <p key={i}><strong>{action.date}</strong><br/><strong>Time: </strong>{action.time}<br/>
        <br/><strong>Kind:</strong> {action.kind}<br/><br/><strong>Name:</strong> {action.name}<br/><br/><strong>Description: </strong>{action.description}<br/>
        
        </p>)
        const action = actionsList.length === 0 ? "No actions" : actionsList

        return(
            <div>
               <div>

                   <h2>{dog.name}'s Activities</h2>
                       {action}  
               </div>
            <strong><h3>Add a new action</h3></strong>
               <Form id={this.props.match.params.dogId}/>
            </div>
        )

    }
}

const mapStateToProps = state => {
    
    return{
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps)(DogActions);