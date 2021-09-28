import React, { Component } from 'react'
import uniqid from 'uniqid';

export default class Education extends Component {

    render() {
        const {educationDetails} = this.props.details;
        console.log(educationDetails)
        return (
            <div>
                <h3>Education</h3>
                {console.log(educationDetails)}
            </div>
        )
    }
}
