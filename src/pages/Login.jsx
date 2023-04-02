import React, {useState} from 'react'
import Helmet from '../components/Helmet'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <Helmet title='Login'>
            <section>
                <Container className='mt-[8rem]'>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='font-bold text-2xl'>Login</h3>
                            <Form className='auth__form'>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter email' className='border text-base px-2 py-1 mt-3 mb-2 w-full outline-none' value={email} onChange={e=> setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" placeholder='Enter password' className='border text-base px-2 py-1 w-full outline-none' value={password} onChange={e=> setPassword(e.target.value)} />
                                </FormGroup>

                                <button type='submit' className='bg-[#6b70de] px-3 py-1 my-2 rounded-sm text-white'>Login</button>
                                <p className='text-[12px]'>Don't have account? <Link to='/signup'>Sign Up</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login
