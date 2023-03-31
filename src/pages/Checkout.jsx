import React from 'react'
import Helmet from '../components/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import CommonSection from '../components/CommonSection'
import { useSelector } from 'react-redux'
const Checkout = () => {
    
    const totalQty = useSelector(state=>state.cart.totalQuantity)
    const totalAmount = useSelector(state=>state.cart.totalAmount)

    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout'/>

            <section className='bg-white mt-[6rem] md:mt-[19rem]'>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h5 className='mb-4 font-bold'>Payment Information</h5>
                            <Form className='billing__form'>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Fullname' className='border border-slate-400 w-full px-2 py-2 text-sm outline-none' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="email" placeholder='Email address' className='border border-slate-400 w-full px-2 py-2 text-sm outline-none' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="number" placeholder='Phone number' className='border border-slate-400 w-full px-2 py-2 text-sm outline-none' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Street address' className='border border-slate-400 w-full px-2 py-2 text-sm outline-none' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='City' className='border border-slate-400 w-full px-2 py-2 text-sm outline-none' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Postal code' className='border border-slate-400 w-full px-2 py-2 text-sm outline-none' />
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <input type="text" placeholder='Country' className='border border-slate-400 w-full px-2 py-2 text-sm outline-none' />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg='4'>
                            <div className="checkout__cart p-5 bg-[#0a1d37] text-white rounded-sm">
                                <h5 className='flex items-center justify-between mb-4'>Total Qty: <span>{totalQty} items</span></h5>
                                <h5 className='flex items-center justify-between mb-4'>Subtotal: <span>${totalAmount}</span></h5>
                                <h5 className='flex items-center justify-between mb-4'><span>Shipping: <br /> free shipping</span><span>0</span></h5>
                                <h3 className='flex items-center justify-between mb-4 border-t pt-2 rounded-sm text-[20px]'>Total Cost: <span>{totalAmount}</span></h3>
                                <button className='bg-[#6b70de] p-2 text-white w-full rounded-sm'>Place order</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout
