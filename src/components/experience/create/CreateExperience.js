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
        this.removeExperience = this.removeExperience.bind(this);
    }

    addExperience = experience => {
        this.setState({experienceList: this.state.experienceList.concat(experience)});
        this.props.setDetails('experience', this.state)
    }

    removeExperience = (event) => {
        this.setState({experienceList: this.state.experienceList.filter(experience => {
            return experience.id !== event.target.id;
        })})
    }

    render() {
        return (
            <div className='section-container'>
                <h3>Experience</h3>
                <ExperienceSection addExperience={this.addExperience}/>
                <CreatedExperience title='Added Experience' items={this.state.experienceList} removeItem={this.removeExperience}/>
            </div>
        )
    }
}