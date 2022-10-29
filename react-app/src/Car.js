import React, { Component } from 'react';

// class Car extends React.Component {
//     render() {
//       return <h2>Hi, I am a Car!</h2>;
//     }
//   }
  
  
//  function Car() {
//    return <h2>Hi, I am a Car!</h2>;
// }

  export default class Car extends Component {

    constructor(){
        super();
        this.state= {color  : "blue"};
    }

    render() {
            return <h2>Hi, I am a {this.props.brand} Car!</h2>;
       }
  }