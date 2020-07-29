import React from 'react';

export default class HelloWorld extends React.Component {
    state = {
        who: 'World'
    }

    setWho = (who) => {
        this.setState({who})
    }

    render() {
        
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => {this.setWho('Friend')}}>Friend</button>
                <button onClick={() => {this.setWho('React')}}>React</button>
                <button onClick={() => {this.setWho('World')}}>World</button>
            </div>
        )
    }
}