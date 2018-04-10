import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Container, Modal, Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import UniqueNav from "./UniqueNav"

const Wrapper = styled.div`
display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`

class IssuesListView extends Component {

    state = {
        issues: []
    }

    componentDidMount() {
        this.getAllIssues()
    }

    getAllIssues = async () => {
        try {
            const response = await axios.get("/api/issues");
            this.setState({
                issues: response.data
            });
        } catch (err) {
            console.log(err);
            this.setState({ err: err.message });
        }
    }

    render() {
        return (
            <div>
                <Wrapper>
                {this.state.issues.map(issue => {
                    return (
                        <Wrapper key={issue.id}>
                            <Link to={`/issues/${issue.id}`}>
                            {issue.name}

                            {issue.location}
                
                            <Image src={issue.image} />

                            {issue.description}
                               
                            </Link>
                        </Wrapper>
                    )
                })}
                hello world
                </Wrapper>
            </div>
        );
    }
}

export default IssuesListView;