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
        // console.log(this.state.educationList)
        this.setState({educationList: this.state.educationList.concat(education)})
        // this.setState({educationsList: this.state.educationList.concat(education)})
        // console.log(this.state.educationList)
    }

    render() {
        return (
            <div>
                <h3>Education</h3>
                <EducationSection addEducation={this.addEducation} />
                <CreatedEducation title='Added Education' items={this.state.educationList}/>
            </div>
        )
    }
}


// this.setState({references: this.state.references.concat(reference)})


// this.state = {
//     references: []
// }