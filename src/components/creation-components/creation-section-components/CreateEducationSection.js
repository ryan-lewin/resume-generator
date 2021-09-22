import React, { Component } from 'react'

export default class EducationSection extends Component {
    render() {
        return (
            <div className='inputContainer'>
                <label htmlFor='finishDate'>Date finished</label>
                <input type='date' id='finishDate'></input>

                <label htmlFor='Award'>Award</label>
                <input id='Award'></input>

                <label htmlFor='institution'>Institution</label>
                <input id='institution'></input>

                <label htmlFor='grade'>Grade</label>
                <input id='grade'></input>
            </div>
        )
    }
}
