import React, { Component } from 'react'

import Details from './Details'
import Education from './Education'
import Experience from './Experience'
import References from './References'

export default class PrintSide extends Component {
    

    render() {
        return (
            <div className='container'>
                <Details />
				<Experience />
				<Education />
				<References /> 
            </div>
        )
    }
}
