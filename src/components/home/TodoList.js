import React, {Component} from 'react';

import Todo from './Todo';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container" style={styles.todoList}>
                <div className="list-group">
                    <a className="list-group-item" style={styles.todoListHeader}>
                        TodoList by Mario Peñate Fariñas
                    </a>
                    <ul className="list-group">
                        <Todo />
                    </ul>
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
        backgroundColor : '#eceeef'
    }
};