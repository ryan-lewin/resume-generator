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
                <label htmlFor='name'>Your name</label>
                <input name='name' value={this.state.name || ''} onChange={this.handleChange}></input>

                <label htmlFor='Address'>Your address</label>
                <input name='address' value={this.state.address || ''} onChange={this.handleChange}></input>

                <label htmlFor='number'>Your number</label>
                <input type='tel' name='number' value={this.state.number || ''} onChange={this.handleChange}></input>

                <label htmlFor='email'>Your email</label>
                <input type='email' name='email' value={this.state.email || ''} onChange={this.handleChange}></input>

                <label htmlFor='linkedin'>Your LinkedIn</label>
                <input name='linkedin' value={this.state.linkedin || ''} onChange={this.handleChange}></input>

                <label htmlFor='github'>Your Github</label>
                <input name='github' value={this.state.github || ''} onChange={this.handleChange}></input>

                <label htmlFor='github'>Your Website</label>
                <input name='website' value={this.state.website || ''} onChange={this.handleChange}></input>

                <button type='submit'>Save</button>
            </div>
        )
    }
}
