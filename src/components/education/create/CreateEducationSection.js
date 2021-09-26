import React, { Component } from 'react'
import uniqid from 'uniqid'

export default class EducationSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
                id: uniqid(),
                finished: '',
                award: '',
                institution: '',
                grade: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendEducation = this.sendEducation.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value,
            id: uniqid(),
        })
    }

    sendEducation = event => {
        event.preventDefault();
        this.props.addEducation(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            id: uniqid(),
            finished: '',
            award: '',
            institution: '',
            grade: '',
        })
    }

    render() {
        return (
            <form className='inputContainer' onSubmit={this.sendEducation}>
                <label htmlFor='finished'>Date finished
                <input type='date' name='finished' value={this.state.finished || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='Award'>Award
                <input name='award' value={this.state.award || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='institution'>Institution
                <input name='institution' value={this.state.institution || ''} onChange={this.handleChange}></input>
                </label>

                <label htmlFor='grade'>Grade
                <input name='grade' value={this.state.grade || ''} onChange={this.handleChange}></input>
                </label>

                <button>Add</button>
            </form>
        )
    }
}
