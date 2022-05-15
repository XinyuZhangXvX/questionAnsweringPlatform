import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Counter.css'

export default class Counter extends Component{
    // Define the initial state in a constructor
    // state => counter 0
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        // The arrow function prevents the need to do a binding
        this.increment = this.increment.bind(this);
    }

    render(){
        return (
            <div className="Counter">
              <button onClick = {this.increment}>+{this.props.by}</button>
              <span className = "count">{this.state.counter}</span>
            </div>
        );
    }
    //funtion
    increment(){// Update state - counter++
        this.setState({
            counter : this.state.counter + this.props.by }
        );
    }
}

