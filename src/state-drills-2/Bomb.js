import React from 'react';

export default class Bomb extends React.Component {
    state = {
        count: 0,
        interval: null
    }

    tickTockBoom = () => {
        const {count} = this.state;
        if (count >= 8) {
            return 'BOOM!'
        }
        if (count % 2 ===0) {
            return 'tick'
        }
        return 'tock'
    }

    increaseCount = () => {
        this.setState({count: this.state.count + 1})
        if (this.state.count >= 8) {
            clearInterval(this.state.interval)
        }
    }

    componentDidMount() {
        this.setState({interval: setInterval(this.increaseCount, 1000)})
    }



    render() {
        return (
            <div>
                <p>{this.tickTockBoom()}</p>
            </div>
        )
    }
}