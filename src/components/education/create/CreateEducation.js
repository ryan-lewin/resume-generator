import React, { Component } from 'react'
import CreatedEducation from '../../common/CreatedDetails'

import EducationSection from './CreateEducationSection'

export default class Education extends Component {
    constructor() {
        super()

        this.state = {
            educationList: []
        }

        this.addEducation = this.addEducation.bind(this);
    }

    addEducation = (education) => {
        this.setState({educationList: this.state.educationList.concat(education)})
    }

    render() {
        return (
            <div className='section-container'>
                <h3>Education</h3>
                <EducationSection addEducation={this.addEducation} />
                <CreatedEducation title='Added Education' items={this.state.educationList}/>
            </div>
        )
    }
}
