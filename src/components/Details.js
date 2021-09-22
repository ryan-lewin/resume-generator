import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Details extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>Your Name</h1>
                <div>
                    <h5>Your Address</h5>
                    <h5>Your number</h5>
                    <h5>Your email</h5>
                </div>
                <div>
                    <h5>Your linkedin</h5>
                    <h5>Your github</h5>
                    <h5>Your website</h5>
                </div>
            </div>
        )
    }
}
