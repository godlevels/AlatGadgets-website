import React from 'react'
import Helmet from '../components/Helmet'
import CommonSection from '../components/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../Redux/Slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItems)
  const totalAmount = useSelector (state => state.cart.totalAmount)

    return ( 
        <Helmet title='Cart'>
          <CommonSection title='Shopping Cart'/>
          <section className='mt-[20rem]'>
            <Container>
              <Row>
                <Col lg='9'>
                  {
                    cartItems.length===0 ? (
                    <h2 className='text-center relative'>You no add any product</h2>
                    ) : (
                      <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>  
                    </thead>  

                    <tbody>
                      {
                        cartItems.map((item, index)=>(
                          <Tr item={item} key={index}/>
                        ))
                      }
                    </tbody>
                  </table>  
                    )
                  }
                </Col>  
                <Col lg='3'>
                  <div>
                    <h5>Subtotal</h5>
                    <span className='font-bold text-xl'>${totalAmount}</span>
                  </div>  
                  <p>Get the total in the checkout</p>

                  <div className='mt-9 flex gap-x-6'>
                    <button className="items-center"><Link to='/shop' className='bg-[#6b70de] p-2 text-white rounded-sm'>Continue Shopping</Link></button>
                    <button className="items-center"><Link to='/checkout' className='bg-[#6b70de] p-2 text-white rounded-sm'>Checkout</Link></button>
                  </div>
                </Col>  
              </Row>  
            </Container>  
          </section>  
        </Helmet>
    )
}

const Tr = ({item})=> {
  const dispatch = useDispatch()

  const deleteProduct  =()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td className='w-[50px] h-[50px] bg-cover text-[#0a1d37]'><img src={item.imgUrl} alt="" /></td>
      <td className='text-[#0a1d37]'>{item.productName}</td>
      <td className='text-[#0a1d37]'>${item.price}</td>
      <td className='text-[#0a1d37]'>{item.quantity}px</td>
      <td className='cursor-pointer text-[#0a1d37]'><motion.i class='ri-delete-bin-line' whileTap={{scale: 1.2}} onClick={deleteProduct}></motion.i></td>
    </tr>
  )
}

export default Cart
