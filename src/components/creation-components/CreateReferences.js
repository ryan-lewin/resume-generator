import React, { Component } from 'react'
import uniqid from 'uniqid'
import ReferenceSection from './creation-section-components/CreateReferenceSection'

export default class References extends Component {
    constructor() {
        super();

        this.state = {
            references: []
        }
        this.addReference = this.addReference.bind(this);

        this.testButton = this.testButton.bind(this);
    }

    addReference = (reference)  => {
        this.setState({references: this.state.references.concat(reference)})
    }

    testButton = (event) => {
        // Used to test the state being updated
        event.preventDefault();
        console.log(this.state.references)
    }

    render() {
        return (
            <div>
                <h3>References</h3>
                <ReferenceSection addReference={this.addReference}/>
                <button onClick={this.testButton}>test</button>
            </div>
        )
    }
}
