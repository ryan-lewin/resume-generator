import React, { Component } from 'react'

export default class CreatedDetails extends Component {
    constructor(props) {
        super(props);

        // this.handleDelete = this.handleDelete.bind(this);
    }

    // handleDelete = event => {
    //     console.log(event.target.id)
    //     // item.preventDefault();
    //     this.props.removeItem(item);
    // }
    
    render() {
        const {title, items, removeItem} = this.props

        return (
            <div> 
                <h3>Added {title}</h3>
                {items.map(item => {
                    return (
                        <div key={item.id} className='created-details-container'>
                                {Object.entries(item).map(([key, value]) => 
                                <div key={key}>
                                    <p>{key.toUpperCase()}: {value}</p>
                                </div>)} 
                            <button id={item.id} onClick={removeItem}>Remove</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}