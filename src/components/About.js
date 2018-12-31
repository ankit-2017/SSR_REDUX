import React, {Component} from 'react'
import { connect } from 'react-redux'
import {FetchUser} from '../actions'

class About extends Component{
    constructor(props){
        super(props);

        
    }
    componentDidMount(){
        this.props.FetchUser()
        this.getUsers1 = this.getUsers1.bind(this)
    }

    getUsers1(){
        
        return this.props.data.map((data,i)=>{
            return <li key={data.id} >{data.name}</li>
            })
    }

    render(){
        return(
            <div>
                <h1>Here is User's List</h1>
                {/* <button onClick={this.getUsers} >about</button> */}
                <ul>
                    {this.getUsers1()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('store state', state)
    return {data: state.users }
    
}
export default connect(mapStateToProps, {FetchUser})(About)