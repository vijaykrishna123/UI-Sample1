//jan-2-2017
//Rendering Elements, components and props

//Babel is the compiler for writing next generation javascript
//browsers can understand only plain javascript
//http://babeljs.io/

//Rendering Elements

//sample code
//js
ReactDOM.render(
    <h1>Hi there!</h1>,
    document.getElementById('root')
  );
  //html
  <div id="root">
  <!-- This element's contents will be replaced with your component. -->
</div>

//output
Hi there!

//React elements are plain objects
//Virtual DOM-- happens in background, keeps in the normal DOM, keeps rest of stuff same.
//componets are group of elements, they are fundamental parts

//“root” DOM node because everything inside it will be managed by React DOM.
//Applications built with just React usually have a single root DOM node. 


//Updating the Rendered Element -->React elements are immutable.
//example
//js
function tick() {
    const element = (
      <div>
        <h1>Hi, chitti!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,//elementing is loading
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);// syntax: setInterval(callback,milliseconds);
  //for every thousand seconds it executes tick function 


  //output
  Hi, chitti!
  It is 8:19:14 PM.


  //ex
  setTimeout(() => {console.log('hi')}, 1000);
  //output
  335
  hi


  ///ex
  setInterval(() => {console.log('hello')}, 1000);
  530
  //hello
  //after every 1000ms it is called hello


  //react check the background things & changing and updates those things 
  //  react only updates what is necessary

  //React DOM compares the element and its children to the previous one,
  // and only applies the DOM updates necessary to bring the DOM to the desired state.

  //components and props
  http://www.material-ui.com/#/-->is the design language of google, developed by google
  

  //button component-->flat button, raised button, floating action button,icon button
  //differents components 
  //cards in android phones-- normal reusable things
  //we can pass arguments for all the functions

  //Definition Components : They accept arbitrary inputs (called “props”) and return React elements 
  //props are input to a function
  example

  function Welcome(props) {  //takes welcome function   //props=inputs we pass
    return <h1>Hello, {props.name}</h1>;
  }

  //fb has 30000 components inside
  //it is super fast, depends on the user login it will display

  //we can define compenent using ES6 class

//Classes have some additional features
  ex
  class Welcome extends React.Component {  //extends means inheriting things from parent class
    render() { //render= load
      return <h1>Hello, {this.props.name}</h1>;
    }
  }


  //Rendering a Component
  //types functional component and class component

  const element = <Welcome name="Siri" />;


  //code
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name, this.props.address}</h1>;  //props is an object, we are accessing default object with name
    }
  }

  props ={
    name:'siri',
    address:'tx'
  }  //{   }  are used to evaluate the expression

  //sample code
  function Welcome(props) {
    return <h1>Hi, {props.name}</h1>;
  }
  
  const element = <Welcome name="Siri" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
//output Hi, Siri

//code
function Welcome(props) {
    return <h1>Hi, {props.name}
    , {props.address}</h1>
          
  }
  
  const element = <Welcome name="apple"
                    address="texas" /> 
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  //output   Hi, apple, texas  
