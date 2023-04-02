import React, {useState} from 'react'
import Helmet from '../components/Helmet'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.config'



const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const signup = async(e)=> {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredential.user
            console.log(user)
        } catch (error) {
            
        }
    }
    
    return (
        <Helmet title='Sign up'>
            <section>
                <Container className='mt-[8rem]'>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className='font-bold text-2xl'>Sign Up</h3>
                            <Form className='auth__form' onSubmit={signup}>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Username' className='border text-base px-2 py-1 mt-3 mb-2 w-full outline-none' value={username} onChange={(e)=> setUsername(e.target.value)} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter email' className='border text-base px-2 py-1 mb-2 w-full outline-none' value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" placeholder='Enter password' className='border text-base px-2 py-1 w-full outline-none' value={password} onChange={(e)=> setPassword(e.target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="file" onChange={(e)=> setFile(e.target.files[0])} />
                                </FormGroup>

                                <button type='submit' className='bg-[#6b70de] px-3 py-1 my-2 rounded-sm text-white'>Sign Up</button>
                                <p className='text-[12px]'>Already registered? <Link to='/signup'>Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup
