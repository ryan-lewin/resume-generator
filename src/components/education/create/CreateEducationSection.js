import React, { Component } from 'react'

export default class EducationSection extends Component {
    render() {
        return (
            <div className='inputContainer'>
                <label htmlFor='finishDate'>Date finished
                <input type='date' id='finishDate'></input>
                </label>

                <label htmlFor='Award'>Award
                <input id='Award'></input>
                </label>

                <label htmlFor='institution'>Institution
                <input id='institution'></input>
                </label>

                <label htmlFor='grade'>Grade
                <input id='grade'></input>
                </label>
            </div>
        )
    }
}
