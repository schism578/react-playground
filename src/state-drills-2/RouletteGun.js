import React from 'react';

export default class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    triggerPull = () => {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        }
        if (chamber === bulletInChamber) {
            return 'BANG!!!!'
        }
        return 'you\'re safe'
    }

    handleClick = () => {
        this.setState({
          spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
          const randomChamber = Math.ceil(Math.random() * 8)
    
          this.setState({
            chamber: randomChamber,
            spinningTheChamber: false,
          })
        }, 2000)
      }


    render() {
        return (
            <div>
                <p>{this.triggerPull()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}