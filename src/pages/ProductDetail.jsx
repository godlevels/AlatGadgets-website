import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet'
import CommonSection from '../components/CommonSection'
import { motion } from 'framer-motion'
import ProductList from '../components/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/Slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetail = () => {

    const dispatch = useDispatch()

    const {id} = useParams()
    const product = products.find(item=> item.id === id)

    const { imgUrl, productName, price, avgRating, shortDesc, category } = product

    const relatedProducts = products.filter(item=> item.category===category)

    const addToCart = ()=> {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,
        }))
        toast.success('You don add product wey you go buy')
    }


    return (
        <Helmet title={productName}>
            <CommonSection title={productName}/>

            <section className='mt-[20rem]'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="mt-28">
                                <h2 className='text-[1.8rem] mb-1'>{productName}</h2>
                                <div className='flex gap-x-3 items-center'>
                                    <div>
                                        <span><i class='ri-star-s-fill text-orange-400'></i></span>
                                        <span><i class='ri-star-s-fill text-orange-400'></i></span>
                                        <span><i class='ri-star-s-fill text-orange-400'></i></span>
                                        <span><i class='ri-star-s-fill text-orange-400'></i></span>
                                        <span><i class='ri-star-half-s-line text-orange-400'></i></span>
                                    </div>
                                    <p className='mt-3'>(<span>{avgRating}</span> ratings)</p>
                                </div>

                                <span className='text-base font-bold'>${price}</span>
                                <p className='mt-2'>{shortDesc}</p>

                                <motion.button onClick={addToCart} whileTap={{scale: 1.1}} className="bg-[#6b70de] text-white px-3 py-2 mt-3 rounded-sm">
                                    Add to cart
                                </motion.button>
                            </div>
                        </Col>

                        <Col lg='12'>
                            <h2 className="mt-20 text-[1.2rem] font-semibold">
                                Products you  might like
                            </h2>
                        </Col>
                        <ProductList data={relatedProducts}/>
                    </Row>
                </Container>
            </section>

            
        </Helmet>
    )
}

export default ProductDetail
