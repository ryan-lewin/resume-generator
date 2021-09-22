import React, { Component } from 'react'
import ExperienceSection from './creation-section-components/CreateExperienceSection'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <h3>Experience</h3>
                <ExperienceSection />
                <button>Add</button>
            </div>
        )
    }
}
