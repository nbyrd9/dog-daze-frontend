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
                <h2>{dog.name}</h2>
                <p><strong>Age: </strong>{dog.age}</p>
                <p><strong>Breed: </strong>{dog.breed}</p>
            </div>
        )

        return(<div>{dogsList}</div>)
          
    }
}

const mapStateToProps = state => {
    
    return{
        dogs: state.dogReducer.dogs,
        loading: state.dogReducer.loading
    }
}

export default connect(mapStateToProps, {getDogs})(DogInfo);