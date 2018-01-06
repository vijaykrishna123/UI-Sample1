//state and lifecycle

// purpose of Component is to keep each of the functionality unique.

import './App.css';

//name of the Component should be capital 
//Sample.js

//how to make clock component reusable
<h2>It is {props.date.toLocaleTimeString()}.</h2>
  
//replace props
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

//what is a state ?
 //State is similar to props, but it is private and fully controlled by the component.
 //components defined as classes have some additional features. 
 //Local state is exactly that: a feature available only to classes.


 //
 //How to convert Function Component to class?
//instead of <h2>It is {props.date.toLocaleTimeString()}.</h2>
 //use this <h2>It is {this.props.date.toLocaleTimeString()}.</h2> 

 //will have access to state only when defined using 


 this.state={
date: new Date()

 }
 //this.state.date= 9am
modify a date using below command
 this.setState({
     date: new Date()
 })
 //at 9.1 AM
 //this.state.date=9.1 AM
 

 //whenever your state gets modified
 //render function will run again
 //this.state.date  //updated
 //time will be up to date


 //render function gets changed whenever state changes
 we can see using console.log('triggered');