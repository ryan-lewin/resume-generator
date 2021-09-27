import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.details.name || 'Your name'}</h1>
                <div>
                    <p>{this.props.details.address || 'Your address'} | {this.props.details.number || 'Your number'} | {this.props.details.email || 'Your email'}</p>
                </div>
                <div>
                    <p>{this.props.details.linkedin || 'Your LinkedIn'} | {this.props.details.github || 'Your GitHub'} | {this.props.details.website || 'Your Website'}</p>
                </div>
            </div>
        )
    }
}
