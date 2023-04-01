import React, {useState} from 'react'
import Helmet from '../components/Helmet'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

const Signup = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <Helmet title='Signup'>
            <section>
                <Container className='mt-[8rem]'>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='font-bold text-2xl'>Signup</h3>
                            <Form className='auth__form'>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter email' className='border text-base px-2 py-1 mt-3 mb-2 w-full' value={email} onChange={e=> setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" placeholder='Enter password' className='border text-base px-2 py-1 w-full' value={password} onChange={e=> setPassword(e.target.value)} />
                                </FormGroup>

                                <button type='submit' className='bg-[#6b70de] px-3 py-1 my-2 rounded-sm text-white'>Login</button>
                                <p className='text-[12px]'>Don't have account? <Link to='/signup'>Create account</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup
