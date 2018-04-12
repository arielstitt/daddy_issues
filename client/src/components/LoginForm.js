import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const Label = styled.label`
color: white;
text-shadow: 2px 2px 3px #ce6a6a;
`

const FormWrapper = styled.div`
background-color: #383434;
height: 100vh;
width: 100vw;
display: flex;
align-items:center;
justify-content: center;
`

const LabelWrapper = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
width: 50vw;
justify-content: space-evenly;
padding: 5%;
background-color: #b98f96;
box-shadow: 0px 2px 20px 5px #795a60;

`

const Input = styled.input`
padding: .67857143em 1em;
box-shadow: 1px 2px #6f3f3f;
`


const LoginForm = () => (
  <FormWrapper>

    <LabelWrapper>

      <Label>Username</Label>
      <Input placeholder='username' />

      <Label>Email</Label>
      <Input placeholder='yourname@email.com' />

      <Label>Password</Label>
      <Input placeholder='Password' />

      <checkbox label='I agree to the Terms and Conditions' />

      <button>
        <Link to='/issues'>
          Submit
      </Link>
      </button>

    </LabelWrapper>
  </FormWrapper>
)

export default LoginForm