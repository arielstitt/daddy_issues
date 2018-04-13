import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import styled from "styled-components"


const FormWrapper = styled.div`
background-color: #383434;
height: 100vh;
width: 100vw;
display: flex;
align-items:center;
justify-content: center;
`

const CustomForm= styled(Form)`
    &&&& {
        background-color:pink;
        box-shadow: 0px 2px 20px 5px #795a60;
        padding: 5%;
    }
`

class NewIssue extends Component {
    render() {
        return (
            <div>
                <FormWrapper>
                <CustomForm onSubmit={this.props.createNewIssue}>

                    <Form.Group widths='equal'>

                        <Form.Field
                            control={Input}
                            label='User Name'
                            placeholder='User Name'
                            name='name'
                            value={this.props.newIssue.name}
                            onChange={this.props.handleChange}
                        />

                        <Form.Field
                            control={Input}
                            label='Location'
                            placeholder='Location'
                            name='location'
                            value={this.props.newIssue.location}
                            onChange={this.props.handleChange}
                        />

                        <Form.Field
                            control={Input}
                            label='Image URL'
                            placeholder='Change Your Profile Pick'
                            name='image'
                            value={this.props.newIssue.image}
                            onChange={this.props.handleChange}
                        />

                    </Form.Group>

                    <Form.Field
                        control={TextArea}
                        label="Issues"
                        placeholder='Tell Us Your Issues'
                        name='description'
                        value={this.props.newIssue.description}
                        onChange={this.props.handleChange}
                    />
                    <Button type="submit">Submit</Button>
                </CustomForm>
</FormWrapper>
            </div>
        );
    }
}

export default NewIssue;