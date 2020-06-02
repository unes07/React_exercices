import React, { Component } from 'react';
import './die.css';

class Die extends Component {
    render() { 
        return ( 
                <i className={`Die fas fa-dice-${this.props.face} 
                    ${this.props.isRolling && 'shaking'}
                `}></i>
         );
    }
}
 
export default Die;