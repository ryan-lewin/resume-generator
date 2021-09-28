import React, { Component } from 'react'

import Details from './Details'
import Education from './Education'
import Experience from './Experience'
import References from './References'

export default class PrintSide extends Component {
    

    render() {
        return (
            <div className='pretty-print' className='A4'>
                <section>
                    <h1>{this.props.details.personal.name || 'Your name'}</h1>
                    <p>{this.props.details.personal.address || 'Your address'} | {this.props.details.personal.number || 'Your number'} | {this.props.details.personal.email || 'Your email'}</p>
                    <p>{this.props.details.personal.linkedin || 'Your LinkedIn'} | {this.props.details.personal.github || 'Your GitHub'} | {this.props.details.personal.website || 'Your Website'}</p>
                </section>
                <section>
                    
                </section>
            </div>
        )
    }
}
