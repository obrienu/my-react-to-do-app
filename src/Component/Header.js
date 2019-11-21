import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App</p>
                <hr />
            </div>
        );
    }
}

export default Header;
