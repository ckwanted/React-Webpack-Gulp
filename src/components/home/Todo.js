import React, { Component } from 'react';

export default class Todo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                <button type="button" className="btn btn-sm btn-danger img-circle float-xs-right">Ｘ</button>
                <button type="button" className="btn btn-sm btn-success img-circle float-xs-right" style={styles.btn}>✓</button>
                lorem
            </li>
        );
    }

}

const styles = {
    btn : {
        marginRight : '5px'
    }
};