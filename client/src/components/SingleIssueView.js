import React, { Component } from 'react';
import axios from "axios"
import EditForm from "./EditForm"
import { Link } from "react-router-dom";


class SingleIssueView extends Component {
    state = {
        issue: {},
        showEditIssue: false
    }

    componentDidMount() {
        console.log(this.getSingleIssue())
        this.getSingleIssue();
    }

    getSingleIssue = async () => {
        const issueId = this.props.match.params.id
        const res = await axios.get(`/api/issues/${issueId}`)
        this.setState({
            issue: res.data
        })
        // console.log("hello?")
        console.log(this.state);
    }

    toggleEditView = () => {
        this.setState({ showEditIssue: !this.state.showEditIssue })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state.issue)
        const issueId = this.state.issue.id
        const issueUpdate = { ...this.state.issue }
        await axios.patch(`/api/issues/${issueId}`, issueUpdate)
        this.toggleEditView()
        await this.getSingleIssue()
    }

    handleChange = (event) => {
        const issue = event.target.name
        const newIssue = {...this.state.issue }
        newIssue[issue] = event.target.value
        this.setState({ issue: newIssue })
    }

    render() {
        return (
            <div>
                {/* by default make the edit page false */}
                {this.state.showEditIssue ? (
                    // if true show the edit form
                    // and pass these functions into them 
                    <EditForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        issue={this.state.issue}
                    />)
                    // else show the single issue view
                    // where the button has the toggle function
                    : (
                        <div>
                            <img src={this.state.issue.image} alt="" />

                            {this.state.issue.name}

                            {this.state.issue.description}

                            {this.state.issue.location}
                            <button onClick={this.toggleEditView}>Edit</button>
                            
                            <button>
                                <Link to='/issues'>
                                    Issues
                                </Link>
                            </button>
                        </div>
                    )
                }

            </div>

        )

    }
}
export default SingleIssueView;