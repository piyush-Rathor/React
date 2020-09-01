import React from 'react'
import pt from "prop-types";
const  Student=(props)=>{
    Student.prototype={
        name:pt.string.isRequired,
        roll:pt.number
    };
    Student.defaultProps={
        name:"Geekyshows"
    };
return (<h1>I Am Student{pt.name}</h1>);
    
}
export default Student;