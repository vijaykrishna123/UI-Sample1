//jan-1-2017
//command --> npm start
//index.html file  <div> tag has id and class elements
<div id="root">

//we add id and class for CSS content
//index.html is the foundation of application
//we optimise the code before sending to production
//when we run the npm start command then start: react-scripts start command start executing
//when we run the npm build then it shows build optimisation and bundle.js created.

//bundle.js is the combination of javascript files
index.html is connected to reactjs or any other ui tools

//npm run build we can see the script command.

//open src folder we can see
1.App.CSS
2.App.js
3.App.test.js
4.index.CSS
5.index.js

//npm run build-- create build folder in my-app
//gzip compress and make the size of application very less
//script type="text/javascript" src="/static/js/main.a56d24b3.js"></script> //will have javascript Logic
//<link href="/static/css/main.c17080f1.css" rel="stylesheet"> ---has the css logic in link tag

//App.js component connects to react
///
import React, { Component } from 'react';//ES6 dynamic imports- things we need import the react components
import logo from './logo.svg';
import './App.css';
//logic
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React JS Classes, Introduction</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
//export
export default App;


//index.js
DOM- Document Object Model
//// for any application DOM is skeleton

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //render=load the app //goes to index.html search for root
registerServiceWorker();

///sample code in js
ReactDOM.render(
    <h1>My first react application!</h1>,
    document.getElementById('root')
  );
  
  //Introduction to JSX- unique to reactjs
  //integrate and html in single file
  const element = <h1>Hello, world!</h1>;

  //Expressions in JSX- anything that is evalauated and gives you value
  const element = (
    <h1>
      Hello, {formatName(user)}!//evaluate exp in {}
    </h1>
  );
//In any react application we can see only one DOM.render
function formatName(user) {
    return (
      user.firstName + ' ' + user.lastName
    );
  }
  
  const user = {
    firstName: 'bill',
    lastName: 'gates',
  };
  
  const element = (
    <h1>Hello, {formatName(user)}!</h1>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );


  /////JSX is an expression too

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;  //returning the markup

  }

  //just as div tags we can add image tag also
  const element = <img src={user.avatarUrl}></img>;  //user is an object and avatarurl is an url, element is given particular image
  //use camelcase when you write the react code
//in react instead of class we use classname

//jsx tags
<div>
    <h1>Hello!</h1> ///we can fill with markups
    <h2>Good to see you here.</h2>
  </div>
// 
//Babbel is the Compiler tool convert jsx to javascript.

const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

//index.html and index.js are the mandatory files.
//nodejs is environment,basic thing to run js, we can js in mobile 
//node modules have mutliple packages

