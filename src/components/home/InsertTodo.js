import React, {Component} from 'react';

export default class InsertTodo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit.bind(null, {input: this.refs.text})} style={styles.insertTodo}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Inserta tu todo"
                        ref="text"
                    />
                </div>
            </form>
        );
    }

}

const styles = {
    insertTodo: {
        marginTop: '2rem'
    }
};