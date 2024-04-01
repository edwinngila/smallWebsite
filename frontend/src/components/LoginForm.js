import { useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm=()=>{
    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const handleSave=(e)=>{
        
    }
    return(
       <Container fluid style={{height:"100vh"}} className="d-flex alighn-items-center justify-content-center col-xl-12 bg-dark">
          <Row style={{height:"100vh"}} className="d-flex alighn-items-center">
            <Form onSubmit={handleSave}>
                 <Row style={{color:"white"}}>
                    <h1>LoginForm</h1>
                    <p>Login to your account today</p>
                 </Row>
                <FormGroup>
                    <FormLabel style={{color:"white"}}>UserName</FormLabel>
                    <FormControl onChange={(e)=>{setUserName(e.target.value)}}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel style={{color:"white"}}>Password</FormLabel>
                    <FormControl onChange={(e)=>{setPassword(e.target.value)}}></FormControl>
                </FormGroup>
                <Button style={{color:"white"}} className="mt-4" type="submit">Login user</Button>
                <Row>
                    <Link to={"/signupform"}><u>Signup</u></Link>
                </Row>
            </Form>
          </Row>
       </Container>
    );
}
export default LoginForm;