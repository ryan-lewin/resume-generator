import React, { Component } from 'react'
import ReferenceSection from './creation-section-components/CreateReferenceSection'

export default class References extends Component {
    constructor() {
        super();

        this.state = {
            references: []
        }
        this.addReference = this.addReference.bind(this);
    }

    addReference = (reference)  => {
        console.log(reference)
        this.setState({references: this.state.references.concat(reference)})
    }

    render() {
        return (
            <div>
                <h3>References</h3>
                <ReferenceSection addReference={this.addReference}/>
                <ul>
                    {this.state.references.map(reference => {
                        return <li key={reference.id}>  
                            {`${reference.name}`},  
                            {`${reference.title}`},  
                            {`${reference.company}`},  
                            {`${reference.number}`}, 
                            {`${reference.email}`}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
