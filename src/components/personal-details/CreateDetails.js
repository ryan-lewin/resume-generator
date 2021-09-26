import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            number: '',
            email: '',
            linkedin: '',
            github: '',
            website: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitDetails = this.submitDetails.bind(this);
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value
        })
    }

    submitDetails = event => {
        // Will pass up state to create side
    } 

    render() {
        return (
            <div className='inputContainer'>
                <h3>Personal Information</h3>
                <label htmlFor='name'>Your name
                <input name='name' value={this.state.name || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='Address'>Your address
                <input name='address' value={this.state.address || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='number'>Your number
                <input type='tel' name='number' value={this.state.number || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='email'>Your email
                <input type='email' name='email' value={this.state.email || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='linkedin'>Your LinkedIn
                <input name='linkedin' value={this.state.linkedin || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='github'>Your Github
                <input name='github' value={this.state.github || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='github'>Your Website
                <input name='website' value={this.state.website || ''} onChange={this.handleChange}></input>
                </label>

                <button type='submit'>Save</button>
            </div>
        )
    }
}
