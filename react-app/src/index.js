import React from 'react';
import ReactDOM from 'react-dom/client';
import Garage from './Garage';
import EventHandler from './eventhandler';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/*
ES6

Classes
Arrow Function
Variables(let ,const ,var)
ArrayMethods
Destructuring
Modules
Tenary Operator
Spread Operator

*/



//JSX

//const myElement = <h1>I Love JSX!</h1>;
//const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }

// const myElement = <h1>{text}</h1>;

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myElement);



// Without JSX

// const myElement = React.createElement('h1', {}, 'I do not use JSX!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//https://javascript.plainenglish.io/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Garage />);

root.render(<EventHandler/>);