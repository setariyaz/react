//Fragment
/*function Student()
{
    return (
        <>
            <h1>Hii</h1>
            <h2>Hello</h2>
        </>
    )
}

export default Student;*/




 //Memo
/*import React, { useState } from "react";
const Name=React.memo(function Student({name}){

    const [c,Setc]=useState(0);
    console.log(c)
    return(
        <>
            <h1>{name}</h1>
            <h1>{c}</h1>
            <button onClick={()=>Setc(c+1)}>Click me</button>
        </>
    )

});

export default Name; */


//event with function

/*function Student(){

    function My(){
        alert("HEllo");
    }

    return (
    <>
        <button onClick={My}>Click me</button>
    </>
    )
}
export default Student;*/


//event with class
/*import React, { Component, useState } from "react";
class Student extends Component{

    render()
    {
        function my(){
            alert("Welcome To Somnath Computer")
        }
    
        return (
        <>
            <button onClick={my}>click me</button>
        </>
        )
        
    }
}
export default Student;*/

//Passing Arguments with Class component

/*import React, { Component } from "react";

class Student extends Component{

    render(){

        return <h1>{this.props.name}</h1>
    }

}
export default Student;*/


//Passing Arguments with functional Component

function Student(props){

    return <h1>{props.name}</h1>
}
export default Student;