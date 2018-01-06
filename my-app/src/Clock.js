import React, {Component} from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('triggered');
    return (
      <div>
        <h1>Time!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;

//function Clock(props) {
  //  return (
    //  <div>
      //  <h1>Hello, world!</h1>
       // <h2>It is {props.date.toLocaleTimeString()}.</h2>
      //</div>
    //);
  //}
  //<Clock date={new Date()} />
 //props ={
//date: new Date()
 // }



   //will have access to state only when defined using class
   //replace this.props with this.state because props and state similar kind of thing
   //props -->read only
   //state --> read and write


   //1. component will mount
    //certain functions
    //functions get called automatically

   //2. Component wil unmounting

   //example
   //componentDidMount() {
    
     // }
    
      //componentWillUnmount() {
    
   //   }
   //The componentDidMount() hook runs after the component output has been rendered to the DOM.
   //componentDidMount() {
    //this.timerID = setInterval(
     // () => this.tick(),
      //1000
    //);
  //}

  //  componentWillUnmount() {
   // clearInterval(this.timerID);
  //}