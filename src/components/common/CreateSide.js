import React, { Component } from 'react'

import CreateDetails from '../personal-details/CreateDetails'
import CreateEducation from '../education/create/CreateEducation'
import CreateExperience from '../experience/create/CreateExperience'
import CreateReferences from '../references/create/CreateReferences'

export default class CreateSide extends Component {
    constructor() {
		super()

        this.setDetails = this.setDetails.bind(this);

	}

	setDetails = (section, details) => {

        this.props.collectDetails(section, details)
	}

    render() {
        return (
            <div className='container'>
                <CreateDetails className='section-container' setDetails={this.setDetails}/>
				<CreateExperience className='section-container' setDetails={this.setDetails}/>
				<CreateEducation className='section-container' setDetails={this.setDetails}/>
				<CreateReferences className='section-container' setDetails={this.setDetails}/> 
            </div>
        )
    }
}
