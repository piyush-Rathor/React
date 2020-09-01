import React, { Component, Fragment } from 'react';
import "./App.css"
import Student from './Student';
const name=" Hey i am Variable"
class App extends Component{
    render(){
        const a=()=>{
            return "hello I m from fx"
        }
        return(<>
            <h1 className="bg">Hey guys{10+20+30*3},{a()}</h1>
        <h2>Hello dude{this.props.name}</h2>
        <p>Here i using props {this.props.name} ,  {this.props.roll}</p>
            <Student />
            <Student />
        </>)
    }
}
export default App;