import React, { Component } from 'react'
// import uniqid from 'uniqid';

import EducationSection from './creation-section-components/CreateEducationSection'

export default class Education extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         qualifications: {
    //             id: uniqid(),
    //             finishDate: Date,
    //             institute: '',
    //             grade: '',
    //             highlights: [{id: uniqid(), text: ''}]
    //         }
    //     }


    // }

    render() {
        return (
            <div>
                <h3>Education</h3>
                <EducationSection />
                <button>Add</button>
            </div>
        )
    }
}
