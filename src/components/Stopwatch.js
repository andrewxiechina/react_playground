import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            running: false,
        }
    }
    
    tick = () => {
        this.state.seconds += 1;
        this.setState(this.state);
    }

    start = () => {
        this.state.running = true;
        this.setState(this.state);
        this.interval = setInterval(this.tick, 1000);
    }

    stop = () => {
        this.state.running = false;
        clearInterval(this.interval);
        this.state.seconds = 0;
        this.setState(this.state);
    }

    reset = () => {
        
    }

    render() {
        return (
             <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">{this.state.seconds}</div>
                
                <button onClick={this.stop}>Stop</button> 
                 
                <button onClick={this.start}>Start</button>
                
              
            </div>
        );
    }
}

export default Stopwatch