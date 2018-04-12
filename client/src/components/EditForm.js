import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class EditForm extends Component {
    render() {
        return (
            <div>

                <Form onSubmit={this.props.handleSubmit}>

                    <Form.Group widths='equal'>

                        <Form.Field
                            control={Input}
                            label='User Name'
                            placeholder='User Name'
                            name='name'
                            value={this.props.issue.name}
                            onChange = {this.props.handleChange}
                        />

                        <Form.Field
                            control={Input}
                            label='Location'
                            placeholder='Location'
                            name='location'
                            value={this.props.issue.location}
                            onChange = {this.props.handleChange}
                        />

                        <Form.Field
                            control={Input}
                            label='Image URL'
                            placeholder='Change Your Profile Pick'
                            name='image'
                            value={this.props.issue.image}
                            onChange = {this.props.handleChange}
                        />

                    </Form.Group>

                    <Form.Field
                        control={TextArea}
                        label="Issues"
                        placeholder='Tell Us Your Issues'
                        name='description'
                        value={this.props.issue.description}
                        onChange = {this.props.handleChange}
                    />
                    <Button type="submit">Submit</Button>
                </Form>

            </div>
        );
    }
}

export default EditForm;