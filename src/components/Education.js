import React, { Component } from 'react';
import uniqid from 'uniqid';

class edu {
    constructor(school, prog, yearstart, yearend, gpa) {
        this.school = school;
        this.prog = prog;
        this.yearstart = yearstart;
        this.yearend = yearend;
        this.gpa = gpa;
    }
}

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            schools: [],
            showHideform: false,
            showHidebtn: true,
            showHideEditbtn: false,
        }
    };

    schoolChange = (e) => {
        this.setState({
            school: e.target.value,
        })
    }

    progChange = (e) => {
        this.setState({
            prog: e.target.value,
        })
    }

    yearstartChange = (e) => {
        this.setState({
            yearstart: e.target.value,
        })
    }

    yearendChange = (e) => {
        this.setState({
            yearend: e.target.value,
        })
    }

    gpaChange = (e) => {
        this.setState({
            gpa: e.target.value,
        })
    }

    saveSection = () => {
        this.setState({
            schools: this.state.schools.concat([new edu(this.state.school, this.state.prog, this.state.yearstart, this.state.yearend, this.state.gpa)]),
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            showHideform: !this.state.showHideform,
            showHideEditbtn: !this.state.showHideEditbtn,
        })
    }

    toggleForm = () => {
        this.setState({
            showHideform: !this.state.showHideform,
            showHidebtn: !this.state.showHidebtn,
        })
    }

    editForm = (e) => {
        this.setState({
            school: this.state.schools[e.target.parentElement.id][0],
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            showHideform: !this.state.showHideform,
            showHideEditbtn: !this.state.showHideEditbtn,
        })
        console.log(e.target.parentElement.id);
    }

    cancelForm = () => {
        this.setState({
            school: "",
            prog: "",
            yearstart: "",
            yearend: "",
            gpa: "",
            showHideform: !this.state.showHideform,
            showHideEditbtn: !this.state.showHideEditbtn,
        })
    }



    render() {
        const { school, prog, yearstart, yearend, gpa, schools, schoolid, showHideform, showHideEditbtn } = this.state;

        return (
            <div>
                {showHideform && (
                <form id="eduForm" className="resForm">
                    <input
                        type="text"
                        placeholder="Enter the Institution Name"
                        id="schoolName"
                        value={school}
                        onChange={this.schoolChange}
                    ></input>
                    <input
                        type="text"
                        placeholder="Enter the Programme Name"
                        id="progName"
                        value={prog}
                        onChange={this.progChange}
                    ></input>
                    <input
                        type="text"
                        placeholder="Enter the Starting Year"
                        id="yearStart"
                        value={yearstart}
                        onChange={this.yearstartChange}
                    ></input>
                    <input
                        type="text"
                        placeholder="Enter the Ending Year"
                        id="yearEnd"
                        value={yearend}
                        onChange={this.yearendChange}
                    ></input>
                    <input
                        type="text"
                        placeholder="Enter your GPA"
                        id="gpaInput"
                        value={gpa}
                        onChange={this.gpaChange}
                    ></input>
                    <button type="button" onClick={this.saveSection}>Save Education</button>
                    <button type="button" onClick={this.cancelForm}>Cancel</button>
                </form>
                )}
                <div>
                    {schools.map((item, index) => {
                        return (
                            <div key={uniqid()} id={index}>
                                <h2>School: {item.school}</h2>
                                <h2>Programme: {item.prog}</h2>
                                <h4>Starting Year: {item.yearstart}</h4>
                                <h4>Ending Year: {item.yearend}</h4>
                                <h4>GPA: {item.gpa}</h4>
                                <button type="button" onClick={this.editForm}>Edit Education</button>
                            </div>
                        )
                    })}
                    <button type="button" onClick={this.toggleForm}>Add New Education</button>
                </div>
            </div>
        )
    }
}

export default Education;