import React from 'react'
import { motion } from 'framer-motion'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
    return (
        <Col lg='3' md='4'>
            <div className='cursor-pointer my-5'>
                <div>
                    <motion.img whileHover={{scale: 1.1}} src={item.imgUrl} alt="" />
                </div>
                <div className='p-2'>
                    <h3 className='text-[1.1rem] font-semibold'><Link to={`/shop/${item.id}`} className='text-[#0a1d37]'>{item.productName}</Link></h3>
                    <span className='text-[.9rem]'>{item.category}</span>
                </div>
                <div className="flex items-center justify-between p-2">
                    <span className='text-[#0a1d37] text-2xl font-medium'>{item.price}</span>
                    <motion.span whileTap={{scale: 1.2}}><i class='ri-add-line text-lg p-1 bg-[#0a1d37] text-white rounded-full'></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard
