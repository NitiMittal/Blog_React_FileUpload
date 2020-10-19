import React, { Component } from 'react'
import {connect} from 'react-redux'

 class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div>Age:<span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

// whenever state changes this will be used
const mapStateToProps=(state)=>{
  return{
    age:state.age
  }
}

// to pass action to reducer dispatch to props is used. as we don't have local state, props will only be used.
const mapDispatchToProps=(dispatch)=>{
  return{
    onAgeUp:()=>dispatch({type:"AGE_UP"}),
    onAgeDown:()=>dispatch({type:"AGE_DOWN"})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);