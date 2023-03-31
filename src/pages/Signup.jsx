import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config';
import { ref, uploadBytesResumable, getDownladURL } from 'firebase/storage'
import { storage } from '../firebase.config';
import { toast } from 'react-toastify'
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
// import { async } from '@firebase/util';

const Signup = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)


    const signup = async(e)=>{
        e.preventDefault()
        setLoading(true)

        try {
            const user = userCredential.user
            // const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, `images/${Date.now() + fullName}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on((error)=> {
                toast.error(error.message)
            }, ()=>{
                getDownladURL(uploadTask.snapshot.ref).then(async(downloadURL)=> {
                    await updateProfile(user,{
                        displayName: fullName,
                        photoURL: downloadURL
                    })

                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: fullName,
                        email,
                        photoURL: downloadURL,
                    })

                })
            })
            console.log(user)
        } catch (error) {
            toast.error('Something went wrong')
        }
    }

    return (
        <Helmet title='Signup'>
            <section>
                <Container className='bg-white mt-[6rem] md:mt-[3rem]'>
                    <Row>
                        <Col lg='6' className='text-center m-auto'>
                            <h3 className='font-bold text-2xl'>Signup</h3>

                            <Form onSubmit={signup}>
                                <FormGroup>
                                    <input type="text"  placeholder='Fullname' className='border outline-none mt-6 px-2 py-1 w-full' value={fullName} onChange={e=> setFullName(e.target.value)} />
                                </FormGroup>


                                <FormGroup>
                                    <input type="email"  placeholder='Enter email' className='border outline-none mt-6 px-2 py-1 w-full' value={email} onChange={e=> setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password"  placeholder='Enter password' className='border outline-none mt-3 mb-2 px-2 py-1 w-full' value={password} onChange={e=> setPassword(e.target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="file" onChange={e=> setFile(e.target.files[0])} />
                                </FormGroup>

                                <button type='submit' className="bg-[#6b70de] px-3 py-1 items-center text-white rounded-sm">
                                    Create Account
                                </button>
                                <p className='mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Signup
