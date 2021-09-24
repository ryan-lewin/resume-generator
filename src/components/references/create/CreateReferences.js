import React, { Component } from 'react'
import ReferenceSection from './CreateReferenceSection'
import CreatedReferences from '../../common/CreatedDetails'

export default class References extends Component {
    constructor() {
        super();

        this.state = {
            references: []
        }
        this.addReference = this.addReference.bind(this);
    }

    addReference = (reference)  => {
        this.setState({references: this.state.references.concat(reference)})
    }

    render() {
        return (
            <div>
                <h3>References</h3>
                <ReferenceSection addReference={this.addReference}/>
                <CreatedReferences title='References' items={this.state.references} />
            </div>
        )
    }
}
