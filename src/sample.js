import React from 'react';
import { Link } from 'react-router-dom';

export default class Sample extends React.Component {
    render() {
        let foo = 3;
        return (
            <Link to={`/params/${foo}`}>Click me</Link>
        )
    }
}