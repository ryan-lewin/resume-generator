import React, { Component } from 'react'

export default class ExperienceSection extends Component {
    render() {
        return (
            <div className='inputContainer'>
                <label htmlFor='startDate'>Start date</label>
                <input type='date' id='startDate'></input>

                <label htmlFor='endDate'>End date</label>
                <input type='date' id='endDate'></input>

                <label htmlFor='jobTitle'>Job title</label>
                <input id='jobTitle'></input>

                <label htmlFor='company'>Company</label>
                <input id='company'></input>
            </div>
        )
    }
}
