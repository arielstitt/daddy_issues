import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class EditForm extends Component {
    render() {
        return (
            <div>

                <Form>

                    <Form.Group widths='equal'>

                        <Form.Field
                            control={Input}
                            label='User Name'
                            placeholder='User Name'
                            name='name'
                            value={this.props.issue.name}
                        />

                        <Form.Field
                            control={Input}
                            label='Location'
                            placeholder='Location'
                            name='location'
                            value={this.props.issue.location}
                        />

                        <Form.Field
                            control={Input}
                            label='Image URL'
                            placeholder='Change Your Profile Pick'
                            name='image'
                            value={this.props.issue.image}
                        />

                    </Form.Group>

                    <Form.Field
                        control={TextArea}
                        label="Issues"
                        placeholder='Tell Us Your Issues'
                        name='description'
                        value={this.props.issue.description}
                    />

                    <Form.Field
                        control={Button}
                        content='Confirm'
                        type="text"
                        
                    />

                </Form>

            </div>
        );
    }
}

export default EditForm;