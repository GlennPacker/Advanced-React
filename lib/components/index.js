import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        ans: 42
    }

    asyncFunc = () => {
        return Promise.resolve(2);
    }

    async componentDidMount() {
        this.setState({
            ans: await this.asyncFunc()
        })
    }

    render() {
        return (
            <h2>Test {this.state.ans}</h2>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
)