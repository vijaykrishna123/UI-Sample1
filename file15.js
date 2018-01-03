//sample code

function discountprices(prices, discount){
    var discounted=[];
    for(var i=0; i<prices.length;i++){
        var discountedprice=prices[i]*(1-discount);
        var finalprice= Math.round(discountedprice*100)/100;
        discounted.push(finalprice);
    }
console.log(i);
console.log(discountedprice);
console.log(finalprice);

return discounted;

}

discountprices([100,200,300],.5);



//output
3
150
150
(3) [50, 100, 150]

////// replace var with let

function discountprices(prices, discount){
    let discounted=[];
    var i;
    for(let i=0; i<prices.length;i++){
        let discountedprice=prices[i]*(1-discount);
        let finalprice= Math.round(discountedprice*100)/100;
        discounted.push(finalprice);
    }
console.log(i);
console.log(discountedprice);
console.log(finalprice);

return discounted;

}

discountprices([100,200,300],.5);

///i is not defined
//we cannot access i and other values outside its block.

///react js ->myapp-> public->index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"> //displays all the extra symbol UTF(Unicode Transformation Format)-8
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">   //viewport-> dimensions of screen
    <meta name="theme-color" content="#000000">
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">
    //we add the css content in the div tag.
    </div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
///

//outside package.js
{
    "name": "my-app",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "react": "^16.2.0",  //react version
      "react-dom": "^16.2.0",
      "react-scripts": "1.0.17"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
    }
  }
  //bundle.js this does all the optimisation


//src-->app.css

.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-title {
  font-size: 1.5em;
}

.App-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

///app.js

import React, { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

class App extends Component {//component is app.js
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

export default App;  //any file can be accessed

//app.js
//import {  } from "module";
//object destructuring
//logic
//export

//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //explanation down
registerServiceWorker();

//ReactDOM-- any application DOM is skeleton
//render means to load


JSX- unique to jsx. extension to JavaScript
we can integrate the html and JavaScript code in jsx file with .jsx extension

We use a tool called Babbel

const element= <h1>hello</h1>

