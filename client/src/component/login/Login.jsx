import React from "react";
import { useForm } from "react-hook-form";
import {Form,Button,Container,Col,Row} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { AuthLogin } from "../../store/slices/userSlice";

const Login =(props)=>{
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => dispatch(AuthLogin(data)) 
    return(
        <>
        <Container>
            <Row className="justify-content-center">
                <Col lg={4} >
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  {...register("email")}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"   {...register("password")}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
       
        </>
    )
}
export {Login}