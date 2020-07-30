import React from 'react';
import './Accordion.css'

export default class Accordion extends React.Component {
    static defaultProps = { 
        sections: [] 
    };

    state = {
        currentSectionIndex: 0
      };

      handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
      }
      
      renderButtons() {
        return this.props.sections.map((section, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
        ))
      }

      renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
        <div className='content' id='content'>
            <p>{currentSection.content}</p>
        </div>
        )
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {this.renderButtons()}
                        {!!this.props.sections.length && this.renderContent()}
                    </li>
                </ul>
            </div>
        )
    }
}