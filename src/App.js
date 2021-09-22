import CreateSide from './components/creation-components/CreateSide'
import PrintSide from './components/print-components/PrintSide'

import React, { Component } from 'react'

import './styles/App.css'

export default class App extends Component {

	render() {
		return (
			<div className="App">
				<CreateSide />
				<PrintSide />
			</div>
		)
	}
}
