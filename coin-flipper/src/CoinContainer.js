import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
          { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
          { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
      };
    constructor(props) {
        super(props);
        this.state = { 
            currCoin : null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
          }
         this.handlClick = this.handlClick.bind(this);
    }
    flip(){
        const newCoin =  choice(this.props.coins)
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }
    handlClick(e){
        this.flip();
    }
    render() {
        return ( 
            <div className='CoinCointainer'>
                <h1>Let's Flip this Coin</h1>
                {this.state.currCoin &&
                    < Coin fcoin={this.state.currCoin} />
                }
                <button onClick={this.handlClick}>Flip</button>
                <p>
                    Nb Of Flips: 
                    {this.state.nFlips}, Head:
                    {this.state.nHeads}, Trail: 
                    {this.state.nTails}
                </p>
            </div>
        );
    }
}
 
export default CoinContainer;