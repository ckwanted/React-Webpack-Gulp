import React, {Component} from 'react';

import Todo from './Todo';
import InsertTodo from './InsertTodo';
import axios from 'axios';

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : [],
            id : null
        };

        this.renderTodos = this.renderTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.insertTodo = this.insertTodo.bind(this);

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.setState({
                    todos : response.data,
                    id : 201
                });
            });
    }

    renderTodos() {
        if(this.state.todos.length) {
            return (
                <ul className="list-group">
                    {
                        this.state.todos.map((todo, index) => {
                            return (
                                <Todo
                                    key={index}
                                    id={todo.id}
                                    title={todo.title}
                                    completed={todo.completed}
                                    onClick={this.deleteTodo}
                                />
                            );
                        })
                    }
                </ul>
            );
        }
        else return ( <li className='list-group-item'>Empty</li> );
    }

    deleteTodo(obj) {
        let todos = this.state.todos;

        todos = todos.filter((todo) => {
            return todo.id != obj.id
        });

        this.setState({
           todos : todos
        });
    }

    insertTodo(obj, event) {
        event.preventDefault();
        let text = obj.insertTodo.refs.text.value.trim();
        event.target.childNodes[0].childNodes[0].value = '';

        if(text.length) {

            let todos = this.state.todos;

            todos.splice(0, 0, {
                id : this.state.id,
                title : text
            });

            this.setState({
                todos : todos,
                id : this.state.id + 1
            });

        }

    }

    render() {
        return (
            <div className="container">
                <InsertTodo onSubmit={this.insertTodo} />
                <div className="list-group" style={styles.todoList}>
                    <a className="list-group-item" style={styles.todoListHeader}>
                        TodoList by Mario Peñate Fariñas
                    </a>
                    { this.renderTodos() }
                </div>
            </div>
        );
    }

}

const styles = {
    todoList : {
        marginTop : '2rem'
    },
    todoListHeader : {
        backgroundColor : '#ECEEEF'
    }
};