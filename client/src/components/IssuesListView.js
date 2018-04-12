import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Container, Modal, Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import UniqueNav from "./UniqueNav"
import { Icon, Feed, Segment } from 'semantic-ui-react'

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

    deleteIssue = async (id) => {
        await axios.delete(`/api/issues/${id}`)
        await this.getAllIssues()
        
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
                            <button onClick={()=>this.deleteIssue(issue.id)}> Delete </button>
                            <Card>
                            <Card.Content>
      <Card.Header>
      <Segment inverted>
      <Button basic inverted color='red'>Red</Button>
      </Segment>
      </Card.Header>
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
        {issue.description}
      </Card.Description>
    </Card.Content>
  </Card>
                        </Wrapper>
                    )
                })}
                </Wrapper>
            </div>
        );
    }
}

export default IssuesListView;