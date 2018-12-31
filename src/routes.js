import React from 'react';
import App from './components/App';
import About from './components/About'
import {Route} from 'react-router-dom'


export default ()=>{
    return (
        <div>
            <Route exact path="/home" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={()=>"this is contact section"} />
        </div>
    )
}

