import React, { Component, Fragment } from 'react';
import Student from './Student'
class App extends Component{
    render(){
        return(<>
            <h1>Hey guys</h1>
            <h2>Hello dude</h2>
            <Student />
            <Student />
        </>)
    }
}
export default App;