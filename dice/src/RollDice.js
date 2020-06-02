import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides : ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = { val1 : "one", val2 : "one", isRolling : false}
        this.defineRan = this.defineRan.bind(this);
    }
    defineRan (){
        const num1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        const num2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        this.setState({val1: num1, val2 : num2, isRolling : true});

        setTimeout( () => {
            this.setState({isRolling : false})
        }, 1000);
    };
    render() { 
        return ( 
            <div className='RollDice'>
                <div className='RollDice-container'>
                    < Die face= {this.state.val1} isRolling={this.state.isRolling} />
                    < Die face= {this.state.val2} isRolling={this.state.isRolling} />
                </div>
                <button onClick={this.defineRan} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
         );
    }
}
 
export default RollDice;