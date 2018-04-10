import React, { Component } from 'react';
import axios from "axios"

class SingleIssueView extends Component {
    state = {
        issue: {}
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

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SingleIssueView;