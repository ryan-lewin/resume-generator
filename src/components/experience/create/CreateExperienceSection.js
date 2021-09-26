import React, { Component } from 'react'
import uniqid from 'uniqid'

export default class ExperienceSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: uniqid(),
            start: '',
            end: '',
            title: '',
            company: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendExperience = this.sendExperience.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value,
            id: uniqid(),
        })
    }

    sendExperience = event => {
        event.preventDefault();
        this.props.addExperience(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            id: uniqid(),
            start: '',
            end: '',
            title: '',
            company: '',
        });
    }

    render() {
        return (
            <form className='inputContainer' onSubmit={this.sendExperience}>
                <label htmlFor='star'>Start date</label>
                <input type='date' name='start' value={this.state.start || ''} onChange={this.handleChange}></input>

                <label htmlFor='end'>End date</label>
                <input type='date' name='end' value={this.state.end || ''} onChange={this.handleChange}></input>

                <label htmlFor='title'>Job title</label>
                <input name='title' value={this.state.title || ''} onChange={this.handleChange}></input>

                <label htmlFor='company'>Company</label>
                <input name='company' value={this.state.company || ''} onChange={this.handleChange}></input>

                <button>Add</button>
            </form>
        )
    }
}
