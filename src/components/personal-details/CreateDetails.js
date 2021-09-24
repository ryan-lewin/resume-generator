import React, { Component } from 'react'

export default class Details extends Component {
    render() {
        return (
            <div className='inputContainer'>
                <h3>Personal Information</h3>
                <label htmlFor='name'>Your name</label>
                <input id='name'></input>

                <label htmlFor='Address'>Your address</label>
                <input id='Address'></input>

                <label htmlFor='number'>Your number</label>
                <input type='tel' id='number'></input>

                <label htmlFor='email'>Your email</label>
                <input type='email' id='email'></input>

                <label htmlFor='linkedin'>Your linkedin</label>
                <input id='linkedin'></input>

                <label htmlFor='github'>Your website</label>
                <input id='website'></input>
            </div>
        )
    }
}
