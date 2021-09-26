import React, { Component } from 'react'
import ExperienceSection from './CreateExperienceSection'
import CreatedExperience from '../../common/CreatedDetails'

export default class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experienceList: [],
        }
        
        this.addExperience = this.addExperience.bind(this);
    }

    addExperience = experience => {
        this.setState({experienceList: this.state.experienceList.concat(experience)});
    }

    render() {
        return (
            <div>
                <h3>Experience</h3>
                <ExperienceSection addExperience={this.addExperience}/>
                <CreatedExperience title='Added Experience' items={this.state.experienceList} />
            </div>
        )
    }
}