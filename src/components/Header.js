import React, { Component } from 'react';
import Stopwatch from './Stopwatch'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.title}</h1>
                <Stopwatch />
            </div>
        );
    }
}

export default Header;