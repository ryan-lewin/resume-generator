import React, { Component } from 'react'

import CreateDetails from './CreateDetails'
import CreateEducation from './CreateEducation'
import CreateExperience from './CreateExperience'
import CreateReferences from './CreateReferences'

export default class CreateSide extends Component {
    render() {
        return (
            <div className='container'>
                <CreateDetails />
				<CreateExperience />
				<CreateEducation />
				<CreateReferences /> 
            </div>
        )
    }
}
