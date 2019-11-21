import React, { Component } from 'react';

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo : ""
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value.trimStart()
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            todo : ""
        })
    }

    render() {
        return (
            <div id="form">
                <form  onSubmit={this.handleSubmit}>
                    <input id="todo" 
                    placeholder="Enter New Todo"
                    name="todo"
                    value={this.state.todo}
                    type="text"
                    onChange = {this.handleChange}
                    required
                    />
                    <button type="submit">Add to List</button>
                </form>            
            </div>
        );
    }
}

export default Form;
