import { useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import {firebase} from "../DB/index";
import axios from "axios";

const SignupForm=()=>{
    const[UserName,setUserName]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const ref = collection(firebase,"USERS");

    const handleSave=async(e)=>{
        e.preventDefault();
        console.log(`UserName:${UserName},Password:${Password},Email:${Email}`);
        try {
            axios.post("http://127.0.0.1:5000/route/SignupRoute",{
                Email:Email,
                UserName:UserName,
                Password:Password
            });
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="col-12 bg-dark">
            <Container fluid style={{height:"100vh"}} className="d-flex alighn-items-center justify-content-center col-xl-12 bg-dark">
          <Row style={{height:"100vh"}} className="d-flex alighn-items-center">
            <Form onSubmit={handleSave}>
                <Row style={{color:"white"}}>
                    <h1>SignupForm</h1>
                    <p>Create an account today</p>
                </Row>
                <FormGroup>
                    <FormLabel style={{color:"white"}} >UserName</FormLabel>
                    <FormControl onChange={(e)=>{setUserName(e.target.value)}}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel style={{color:"white"}}>Email</FormLabel>
                    <FormControl  onChange={(e)=>{setEmail(e.target.value)}}></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel style={{color:"white"}}>Password</FormLabel>
                    <FormControl onChange={(e)=>{setPassword(e.target.value)}}></FormControl>
                </FormGroup>
                <Button style={{color:"white"}} className="mt-4" type="submit">Signup user</Button>
                <Row>
                    <Link to={"/"}><u>Login</u></Link>
                </Row>
            </Form>
          </Row>
       </Container>
        </div>
    );
}
export default SignupForm;