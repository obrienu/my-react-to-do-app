import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import Header from './Header';
import uuid from 'uuid';

export class Ui extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo : []
        }
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditContent = this.handleEditContent.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    }

handleAddTodo(val){
    let newTodo = {...val, id: uuid(), isClicked: false, requestEdit: false}
    this.setState(curState => ({
        todo: [...curState.todo, newTodo]
    }))
}

handleUpdate(todoId){
    this.setState(curState => ({
        todo: curState.todo.map(a => {
            if(a.id === todoId){
                a.isClicked = false
                a.requestEdit = false
                return a
            }else return a
        })
    }))
}


handleDelete(todoId){
    this.setState(curState => ({
        todo : curState.todo.filter(a => (a.id !== todoId))
    }))
}

handleToggle(todoId){
    this.setState(curState => ({
        todo : curState.todo.map(a => {
            if(a.id === todoId){
                a.isClicked = (!a.isClicked)? true : false
                return a
            }else return a
        } )
    }))
}

handleEditContent(todoId, newTodo){
    this.setState(curState => ({
        todo : curState.todo.map( a => {
            if(a.id === todoId){
                a.todo = newTodo
                return a
            }else return a 
        })
    }))
}

handleEdit(todoId){
    this.setState(curState => ({
        todo : curState.todo.map(a => {
            if(a.id === todoId){
                a.requestEdit = (!a.requestEdit)? true : false
                return a
            }else return a
        } )
    }))
}

    render() {
    const list = this.state.todo.map(a => <List clicked = {a.isClicked} todo = {a.todo} id={a.id} key={a.id}
        toggle = {this.handleToggle} edit = {this.handleEdit}  delete={this.handleDelete}  clickEdit = {a.requestEdit}
        setEditContent = {this.handleEditContent} update = {this.handleUpdate} />)
        return (
            <div className= "Ui">
                <Header />
                {list}
                <Form addTodo = {this.handleAddTodo} />
            </div>
        );
    }
}

export default Ui;
