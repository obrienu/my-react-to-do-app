import React, { Component } from 'react';

export class List extends Component {
    constructor(props){
        super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDelete(){
        this.props.delete(this.props.id)
    }

    handleToggle(){
        this.props.toggle(this.props.id)
    }

    handleEdit(){
        this.props.edit(this.props.id)
    }

    handleChange(evt){
        this.props.setEditContent(this.props.id, evt.target.value)
    }

    handleSubmit(evt){
        evt.preventDefault()
        this.props.update(this.props.id)
    }

    render() {

        const edit = 
        <div id="form">
            <form  onSubmit={this.handleSubmit}>
                <input id="todo" 
                placeholder="Edit Todo"
                name="todo"
                value={this.props.todo}
                type="text"
                onChange = {this.handleChange}
                required
                />
                <button type="submit">Edit Todo</button>
            </form>
        </div>

    const list = <div className="List">
        <p className = {this.props.clicked ? "strike" : undefined} onClick={this.handleToggle} >{this.props.todo}</p>
        <span onClick={this.handleEdit}><i className="fas fa-pen"></i></span> 
        <span onClick={this.handleDelete}><i className="far fa-trash-alt"></i></span>
    </div>
    
        return (
            (this.props.clickEdit) ? edit : list
        );
    }
}

export default List;
