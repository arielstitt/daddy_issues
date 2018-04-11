import React, { Component } from 'react';
import axios from "axios"
import EditForm from "./EditForm"

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
        this.setState({showEditIssue: !showEditIssue})
    }
    handleChange = (event) => {

    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const issueId = this.state.artist.id
        const artistUpdate = {...thi.state.issue}
        await axios.patch(`/api/issues/${issueId}`, issueUpdate)
        this.toggleEditView()
        await this.getSingleIssue()
    }

    render() {
        return (
            <div>
            {this.state.showEditIssue ? (
                <EditForm 
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                issue = {this.state.issue}
                />)
            : (
            <div>
            <img src={this.state.issue.image} alt="" />
            
            {this.state.issue.name}  
            
            {this.state.issue.description}
            
            {this.state.issue.location}
            <button>Edit</button>
            </div>
            )
            }
            
    
            </div>
                
        )
        
    }   
}                
export default SingleIssueView;