import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

    static propTypes = {
        todo : React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            completed : !!this.props.todo.completed
        };

    }

    render() {
        return (
            <li className={ !!this.state.completed ? 'list-group-item active' : 'list-group-item' }>
                <button
                    type="button"
                    className="btn btn-sm btn-danger img-circle float-xs-right"
                    onClick={this.props.onClick.bind(null, { id : this.props.todo.id })}
                >
                    Ｘ
                </button>
                <button
                    type="button"
                    className="btn btn-sm btn-success img-circle float-xs-right"
                    style={styles.btn}
                    onClick={() => {
                        this.setState({
                           completed : !this.state.completed
                        });
                    }}
                >
                    ✓
                </button>
                { this.props.todo.title }
            </li>
        );
    }

}

const styles = {
    btn : {
        marginRight : '5px'
    }
};