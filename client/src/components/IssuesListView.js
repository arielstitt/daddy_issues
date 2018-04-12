import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Container, Modal, Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import UniqueNav from "./UniqueNav"
import { Icon, Feed, Segment } from 'semantic-ui-react'
import NewIssue from './NewIssue'

const Wrapper = styled.div`
display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`

class IssuesListView extends Component {

    state = {
        issues: [],
        showNewIssue: false,
        newIssue: {
            name: '',
            image: '',
            location: '',
            description: ''
        }
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

    deleteIssue = async (id) => {
        await axios.delete(`/api/issues/${id}`)
        await this.getAllIssues()

    }
    toggleNewIssueForm = () => {
        this.setState({ showNewIssue: !this.state.showNewIssue })
    }

    createNewIssue = async (event) => {
        event.preventDefault()
        const response = await axios.post('/api/issues', this.state.newIssue)
        const artists = [...this.state.issues, response.data]
        this.setState({
            newIssue: {
                name: '',
                image: '',
                location: '',
                description: ''
            }
        })
    }

    handleChange = (event) => {
        const newIssue = {...this.state.newIssue}
        const attribute = event.target.name
        newIssue[attribute] = event.target.value
        
        this.setState({ newIssue: newIssue})
    }

    render() {
        return (
            <div>
                <div>



                    {this.state.showNewIssue ? (
                        <NewIssue 
                            createNewIssue = {this.createNewIssue}
                            newIssue = {this.state.newIssue}
                            handleChange = {this.handleChange}
                        />
                    ) :
                        <div>
                            <Button onClick={this.toggleNewIssueForm}>New Issue</Button>
                            {this.state.issues.map(issue => {
                                return (
                                    <Wrapper key={issue.id}>
                                        <Link to={`/issues/${issue.id}`}>
                                            <Card>
                                                <Card.Content>
                                                </Card.Content>
                                                <Image src={issue.image} />

                                                <Card.Content>
                                                    <Card.Header>
                                                        {issue.name}
                                                    </Card.Header>
                                                    <Card.Meta>
                                                        <span className='location'>
                                                            {issue.location}
                                                        </span>
                                                    </Card.Meta>
                                                    <Card.Description>
                                                        <Segment >
                                                            {issue.description}
                                                        </Segment>
                                                    </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        </Link>

                                        <Button fluid basic color='red' onClick={() => this.deleteIssue(issue.id)}> Delete </Button>

                                    </Wrapper>
                                )
                            })}
                        </div>
                    }

                </div>


            </div>
        );
    }
}

export default IssuesListView;