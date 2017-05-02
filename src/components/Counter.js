import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={function() {this.props.changeScore(-1); }.bind(this)}> - </button>
                <div className="counter-score"> {this.props.score} </div>
                <button className="counter-action increment" onClick={function() {this.props.changeScore(1); }.bind(this)}> + </button>
            </div>
        );
    }
}

export default Counter;