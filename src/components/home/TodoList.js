import React, {Component} from 'react';

import Todo from './Todo';
import axios from 'axios';

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : []
        };

        this.renderTodos = this.renderTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.setState({
                    todos : response.data
                });
            });
    }

    renderTodos() {
        if(this.state.todos.length) {
            return (
                <ul className="list-group">
                    {
                        this.state.todos.map((todo) => {
                            return (
                                <Todo key={todo.id} todo={todo} onClick={this.deleteTodo} />
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

    render() {
        return (
            <div className="container" style={styles.todoList}>
                <div className="list-group">
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