import React from 'react'
import { connect } from 'react-redux'
import { getDogs } from '../../actions/dogs'


class DogInfo extends React.Component{

    componentDidMount(){
        this.props.getDogs()
    }
    
    render() {
      
        let dogsList = this.props.dogs.map((dog, i) => 
        
            <div key={i}>   
                <h3>{dog.name}</h3>
                <p><strong>Age: </strong>{dog.age}</p>
                <p><strong>Breed: </strong>{dog.breed}</p>
                <br></br>
                <hr />
            </div>
        )

        return(<div>{dogsList}</div>)
          
    }
}

const mapStateToProps = state => {
    
    return{
        dogs: state.dogReducer.dogs
    }
}

export default connect(mapStateToProps, {getDogs})(DogInfo);