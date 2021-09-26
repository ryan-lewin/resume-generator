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
        this.removeReference = this.removeReference.bind(this);
    }

    addReference = (reference)  => {
        this.setState({references: this.state.references.concat(reference)})
    }


    removeReference = (event) => {
        this.setState({references: this.state.references.filter(reference => {
            return reference.id !== event.target.id;
        })})
    }

    render() {
        return (
            <div className='section-container'>
                <h3>References</h3>
                <ReferenceSection addReference={this.addReference}/>
                <CreatedReferences title='References' items={this.state.references} removeItem={this.removeReference}/>
            </div>
        )
    }
}
