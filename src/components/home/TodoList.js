import React, {Component} from 'react';

import Todo from './Todo';

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : [1]
        };

        this.renderTodos = this.renderTodos.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);

    }

    componentDidMount() {

    }

    renderTodos() {
        if(this.state.todos.length) {
            return (
                <ul className="list-group">
                    <Todo title="lorem1" completed={false} onClick={this.deleteTodo} />
                    <Todo title="lorem2" completed={true} onClick={this.deleteTodo} />
                    <Todo title="lorem3" onClick={this.deleteTodo} />
                </ul>
            );
        }
        else return ( <li className='list-group-item'>Empty</li> );
    }

    deleteTodo(obj, event) {
        console.log(obj);
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