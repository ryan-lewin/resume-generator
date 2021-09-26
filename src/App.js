import CreateSide from './components/common/CreateSide'
import PrintSide from './components/print-components/PrintSide'

import React, { Component } from 'react'

import './styles/App.css'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			personal: [],
			experience: [],
			education: [],
			references: []
		}

	}

	collectDetails = (section, details) => {
		switch(section) {
            case 'personal':
                this.setState({personal: details})
				console.log(this.state)
                break;
            case ' experience':
                return
                // break;
            case 'education':
                return
                // break;
            case 'references':
                return
                // break;
            default:
                return
        }
	}


	render() {
		return (
			<div className="App">
				<CreateSide collectDetails={this.collectDetails} />
				<PrintSide details={this.state}/>
			</div>
		)
	}
}
