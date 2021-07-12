import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { getDogs } from '../../actions/dogs'
import DogInput from '../../containers/DogInput'
import DogActions from '../../containers/DogActions'


class Dogs extends Component {

    state={
        inputSearch: ''
    }


        componentDidMount(){
            this.props.getDogs()
        }

        handleOnChange = (e) => {
            this.setState({
                inputSearch: e.target.value

            })
        }

    
    
        render() {
            const {match} = this.props;
            return(
                <div>
                    <DogInput/>
                  
                    <h2>Your Dogs</h2>
                    <h4>Search Dogs</h4>
                    <form>
                        <label>Dogs </label>
                        <input
                            maxLength="40"
                            type="text"
                            value={this.state.inputSearch}
                            name="inputSearch"
                            onChange={this.handleOnChange}
                             />
                        <h6> You have {(40) - this.state.inputSearch.length} character's left </h6>
                    </form>
               
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
            dogs: state.dogReducer.dogs
        }
    }
    
    export default connect(mapStateToProps, {getDogs})(Dogs);