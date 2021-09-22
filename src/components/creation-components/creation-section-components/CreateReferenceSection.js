import React, { Component } from 'react'
import uniqid from 'uniqid'

export default class ReferenceSection extends Component {
    constructor(props) {
        super(props);


        this.state = {
            reference: {
                id: uniqid(),
                name: '',
                title: '',
                company: '',
                number: '',
                email: '',
            },   
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendReference = this.sendReference.bind(this);
    }

    handleChange = (event) => {
        // Spread multiple inputs across the reference state object
        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value
        })
    }

    sendReference = event => {
        event.preventDefault();
        this.props.addReference(this.state);
    }

    render() {
        // const {addReference} = this.props
        return (
            <form className='inputContainer' onSubmit={this.sendReference}>
                <label htmlFor='name'>
                    Name
                    <input
                        name='name'
                        // || '' added to remove warning RE uncontrolled state - Looks as though hooks can be used when utilising func comps for a better way to handle
                        value={this.state.name || ''}
                        onChange={this.handleChange}
                    />
                </label>

                <label htmlFor='title'>
                    Email
                    <input 
                        name='title'
                        value={this.state.title || ''}
                        onChange={this.handleChange}
                    />
                </label>

                <label htmlFor='company'>
                    Company
                    <input 
                        name='company'
                        value={this.state.company || ''}
                        onChange={this.handleChange}
                    />
                </label>

                <label htmlFor='number'>
                    Number
                    <input 
                        type='tel' 
                        name='number'
                        value={this.state.number || ''}
                        onChange={this.handleChange}
                    />
                </label>

                <label htmlFor='email'>
                    Email
                    <input
                        type='text'
                        name='email'
                        value={this.state.email || ''}
                        onChange={this.handleChange}
                    />
                    </label>    
                <button type='submit'>Add</button>
            </form>
        )
    }
}
