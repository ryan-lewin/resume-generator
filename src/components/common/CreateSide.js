import React, { Component } from 'react'

import CreateDetails from '../personal-details/CreateDetails'
import CreateEducation from '../education/create/CreateEducation'
import CreateExperience from '../experience/create/CreateExperience'
import CreateReferences from '../references/create/CreateReferences'

export default class CreateSide extends Component {
    render() {
        return (
            <div className='container'>
                <CreateDetails className='section-container' />
				<CreateExperience className='section-container' />
				<CreateEducation className='section-container' />
				<CreateReferences className='section-container' /> 
            </div>
        )
    }
}
