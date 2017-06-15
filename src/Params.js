import React from 'react';
import { Redirect } from 'react-router-dom';
 
export default class Params extends React.Component {
    constructor() {
        super();
        this.state = {
            isEven: false
        }
    }

    componentDidMount() {
        let number = this.props.match.params.foo;
        let isEven = Object.assign(this.state.isEven);
        let result = number % 2;
        if(result === 0) {
            this.setState({isEven: true});
        }
    }

    render() {
        let renderThis;
        if(this.state.isEven) {
            renderThis = <Redirect to={'/about'} />
        }
        return (
            <div>
                {renderThis}
            </div>
        )
    }
}