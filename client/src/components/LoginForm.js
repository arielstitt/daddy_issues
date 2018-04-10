import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";


const LoginForm = () => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='username' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='yourname@email.com' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button> 
      <Link to='/issues'> 
      Submit
      </Link>
      </Button>
  </Form >
)

export default LoginForm