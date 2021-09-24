import React, { Component } from 'react'

export default class CreatedReferences extends Component {
    render() {
        const {title, items} = this.props

        return (
            <div> 
                <h3>Added {title}</h3>
                {items.map(item => {
                    return (
                        <div key={item.id} className='created-details-container'>
                            <div>
                                {Object.entries(item).map(([key, value]) => <p key={key}>{key.toUpperCase()}: {value}</p>)} 
                            </div>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}