import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
    static defaultProps = {
        num: 0
    }
    render() { 
        return (
            <div className='Ball'>
                {this.props.num}
            </div>
        );
    }
}
 
export default Ball;