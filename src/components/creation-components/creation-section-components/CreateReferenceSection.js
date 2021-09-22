import React, { Component } from 'react'

export default class ReferenceSection extends Component {
    render() {
        return (
            <div className='inputContainer'>
                <label htmlFor='name'>Name</label>
                <input id='name'></input>

                <label htmlFor='title'>Email</label>
                <input id='title'></input>

                <label htmlFor='company'>Company</label>
                <input id='company'></input>

                <label htmlFor='number'>Number</label>
                <input type='tel' id='number'></input>

                <label htmlFor='email'>Email</label>
                <input type='email' id='email'></input>
            </div>
        )
    }
}
