import React, { Component } from 'react';
import Car from './Car';

export default class Garage extends Component {
        render() {
       return(
        <>
        <h1>Who lives in my Garage?</h1>
        <Car brand= "Ford"/>
        </> // Fragments
       );  
   }
  }