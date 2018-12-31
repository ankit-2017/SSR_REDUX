import React, {Component} from 'react'


class App extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to server side rendering app</h1>
                <button onClick={()=>{console.log('clickin button')}} >Click here</button>
            </div>
        )
    }
}
export default App