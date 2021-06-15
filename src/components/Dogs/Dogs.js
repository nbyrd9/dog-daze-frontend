import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { getDogs } from '../../actions/dogs'
import DogInput from '../../containers/DogInput'
import DogActions from '../../containers/DogActions'


class Dogs extends Component {
  
    
        componentDidMount(){
            this.props.getDogs()
        }


        

        render() {
            const {match} = this.props;
            return(
                <div>
                    <DogInput/>
                  
                    <h2>Your Dogs</h2>
                

                     {this.props.loading ? <h3>...loading dogs! :) </h3> :  this.props.dogs.map((dog, i) => <p key={i}>
                      <Link to={`${match.path}/${dog.id}`}>{dog.name} </Link>   </p>   
                     )}    
                    <hr />
                    <Route path={`${match.path}/:dogId`} render={props  => <DogActions {...props}/>}/>    
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
    
    export default connect(mapStateToProps, {getDogs})(Dogs);