import React, { Component } from 'react';


// extra safety for production... create errors 



class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }
// if errors are found this function runs...
    componentDidCatch() {
        this.setState({hasError: true})
    }

    // checks for any errors
    render() {
        if(this.state.hasError){
            return <h1>Oooops. That is not good!</h1>
        }
        return this.props.children
    }
};

export default ErrorBoundry