import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

    static propTypes = {
        title : React.PropTypes.string.isRequired,
        completed : React.PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            completed : !!this.props.completed
        };

    }

    render() {
        return (
            <li className={ !!this.state.completed ? 'list-group-item active' : 'list-group-item' }>
                <button
                    type="button"
                    className="btn btn-sm btn-danger img-circle float-xs-right"
                    onClick={this.props.onClick.bind(null, { id : 1 })}
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
                { this.props.title }
            </li>
        );
    }

}

const styles = {
    btn : {
        marginRight : '5px'
    }
};