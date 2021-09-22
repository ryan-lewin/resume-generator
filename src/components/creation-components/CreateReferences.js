import React, { Component } from 'react'
import ReferenceSection from './creation-section-components/CreateReferenceSection'

export default class References extends Component {
    render() {
        return (
            <div>
                <h3>References</h3>
                <ReferenceSection />
                <button>Add</button>
            </div>
        )
    }
}
