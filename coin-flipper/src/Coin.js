import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() { 
        return (
            <div className ='Coin'>
                <img src={this.props.fcoin.imgSrc} alt = {this.props.fcoin.side} />
            </div>
        );
    }
}
 
export default Coin;