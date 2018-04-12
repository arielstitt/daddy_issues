import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import styled from "styled-components"



const FormWrapper = styled.div`
background-color: #383434;
height: 100vh;
width: 100vw;
display: flex;
align-items:center;
justify-content: center;
`
// border: aliceblue;
// background-color: #cea2a2;
// padding: 7%;
// box-shadow: 0px 14px 41px 42px #8A6A70;
// border-radius: 3%

const LoginForm = () => (
  <FormWrapper>
    

      
        <label>Username</label>
        <input placeholder='username' />
      

      
        <label>Email</label>
        <input placeholder='yourname@email.com' />
      

      
        <label>Password</label>
        <input placeholder='Password' />
      

      
        
      

      <Button>
        <Link to='/issues'>
          Submit
        </Link>
      </Button>

    </Form >
  </FormWrapper>
)

export default LoginForm