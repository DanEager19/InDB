import * as React from "react";
import { Component } from "react"; 
class ApiConnection extends Component {
    state = {
        
    }
    componentDidMount() {
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express}))
        .catch(err => console.log(err))
    }

    callBackendAPI = async () => {
        const response = await fetch('/express_backend')
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }
    render() {
        return (
            <div>{this.state}</div>
        )
    }
}

export default ApiConnection;