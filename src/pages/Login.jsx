import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Helmet title='Login'>
            <section>
                <Container className='bg-white mt-[6rem] md:mt-[6rem]'>
                    <Row>
                        <Col lg='6' className='text-center m-auto'>
                            <h3 className='font-bold text-2xl'>Login</h3>

                            <Form>
                                <FormGroup>
                                    <input type="email"  placeholder='Enter email' className='border outline-none mt-6 px-2 py-1 w-full' value={email} onChange={e=> setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="password"  placeholder='Enter password' className='border outline-none mt-3 mb-2 px-2 py-1 w-full' value={password} onChange={e=> setPassword(e.target.value)} />
                                </FormGroup>

                                <button type='submit' className="bg-[#6b70de] px-3 py-1 items-center text-white rounded-sm">
                                    Login
                                </button>
                                <p className='mt-2'>Don't have an account? <Link to='/signup'>Create account.</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login
