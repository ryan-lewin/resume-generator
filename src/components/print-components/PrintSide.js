import React, { Component } from 'react'

import Details from './Details'
import Education from './Education'
import Experience from './Experience'
import References from './References'

export default class PrintSide extends Component {
    

    render() {
        return (
            <div className='pretty-print' className='A4'>
                <Details details={this.props.details.personal}/>
				<Experience details={this.props.details.experience} />
				<Education details={this.props.details.education} />
				<References details={this.props.details.references} /> 
            </div>
        )
    }
}
