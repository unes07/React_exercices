import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        sides : ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = { val1 : "one", val2 : "one"}
        this.defineRan = this.defineRan.bind(this);
    }
    defineRan (){
        const num1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const num2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        this.setState({val1: num1, val2 : num2});
    }
    render() { 
        let face;
        return ( 
            <div>
                < Die face= {this.state.val1} />
                < Die face= {this.state.val2} />
                <button onClick={this.defineRan}>Roll Dice</button>
            </div>
         );
    }
}
 
export default RollDice;