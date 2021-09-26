import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.details.name || 'Your name'}</h1>
                <div>
                    <h5>{this.props.details.address || 'Your address'}</h5>
                    <h5>{this.props.details.number || 'Your number'}</h5>
                    <h5>{this.props.details.email || 'Your email'}</h5>
                </div>
                <div>
                    <h5>{this.props.details.linkedin || 'Your LinkedIn'}</h5>
                    <h5>{this.props.details.github || 'Your GitHub'}</h5>
                    <h5>{this.props.details.website || 'Your Website'}</h5>
                </div>
            </div>
        )
    }
}
