import React from 'react'
import { motion } from 'framer-motion'
import serviceData from './assets/data/serviceData'
import { Container, Row, Col } from 'reactstrap'
const Services = () => {
    return (
        <div className='services'>
            <Container className='mt-8'>
                <Row>
                    {
                        serviceData.map((s, i) => (
                            <Col lg='3' md='4' key={i}>
                                <motion.div whileHover={{scale:1.1}} className="flex px-3 items-center gap-3 rounded-md cursor-pointer mb-4" style={{background: `${s.bg}`}}>
                                    <span className='text-[2rem] bg-[#0a1d37] px-[.6rem] rounded-full text-[#fff] font-normal'><i class={s.icon}></i></span>
                                    <div className='mt-3'>
                                        <h3 className='text-[#0a1d37] text-[1rem] font-semibold'>{s.title}</h3>
                                        <p className='text-[.9rem] mt-[5px] text-[#222]'>{s.subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Services
