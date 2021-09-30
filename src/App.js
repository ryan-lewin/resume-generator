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
		console.log(section)
		console.log(details)
		switch(section) {
            // case 'personal':
            //     this.setState({personal: details})
            //     break;
            case 'experience':
                this.setState({experience: details})
                break;
            case 'education':
				this.setState({education: details})
                break;
            case 'references':
				this.setState({references: details})
                break;
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


// this.setState({experienceList: this.state.experienceList.concat(experience)});
