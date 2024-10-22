import React from "react";
class App extends React.Component{
    componentDidMount(){
    console.log("I am rendering")
    }
      render(){
        return(
        <div>
        <h1>Monsters Rollodex</h1>
        <input id="email"/>
        <button type="submit">submit</button>
      </div>
        )
      }
}

export default App
