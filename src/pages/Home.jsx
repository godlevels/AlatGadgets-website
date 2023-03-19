import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { motion } from 'framer-motion'
import { EffectFade, Autoplay } from 'swiper'
import HeroImg from '../assets/images/heroone.jpg'
import HeroImgTwo from '../assets/images/herotwo.jpg'
import HeroImgThree from '../assets/images/herothree.jpg'
import { Link } from 'react-router-dom'
import Services from '../Services'
import { Container, Row, Col } from 'reactstrap'
import ProductList from '../components/ProductList'
import products from '../assets/data/products'


const slides = [
  {
    title: 'New & Stunning Gadgets',
    bg: HeroImgTwo,
    btnText: 'Shop Now'
  },
  {
    title: 'Trending Products in',
    bg: HeroImg,
    btnText: 'Shop Now'
  },
  {
    title: 'Luxury at Its Peak',
    bg: HeroImgThree,
    btnText: 'Shop Now'
  },
]

const Home = () => {

  const year = new Date().getFullYear()

  const [newProducts, setNewProducts] = useState([])
  const [bestProducts, setBestProducts] = useState([])

  useEffect(()=> {
    const filteredNewProducts = products.filter(
      (item) => item.category === 'sofa'  
    )

    const filteredBestProducts = products.filter(
      (item) => item.category === 'gadgets'  
    )
      setNewProducts(filteredNewProducts)
      setBestProducts(filteredBestProducts)
  }, [])

    return (
      <Helmet title={'Home'}>
        <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay:3000, disableOnInteraction: false, }} className='h-[600px] xl:h-[550px]'>
          {slides.map((slide, index) => {
            const {title, desc, bg, btnText} = slide
            return (
              <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
                <div className='z-20 mt-20 md:mt-32 lg:mt-32 xl:mt-0 text-white text-center mx-20'>
                  <h1 className='text-[32px] font-medium tracking-[2px] lg:text-[68px] max-w-[700px]'>{title} {year}</h1>
                  <div>{desc}</div>
                  <motion.button whileTap={{scale:1.2}} className='border-none outline-none px-[20px] py-[8px] bg-[#0a1d37] rounded-md mt-5'><Link to='/shop' className='text-slate-500 hover:text-[#fff]'>{btnText}</Link></motion.button>
                </div>

                <div className='absolute top-0 w-full h-full'>
                  <img className='object-cover h-full w-full' src={bg} alt="" />
                </div>
                <div className='absolute w-full h-full bg-black/70'></div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='font-semibold text-[#0a1d37]'>New Products</h2>
              </Col>
              <ProductList data={newProducts}/>
            </Row>
          </Container>
        </section>

        <Services />

        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='font-semibold text-[#0a1d37]'>Best Sales</h2>
              </Col>
              <ProductList data={bestProducts}/>
            </Row>
          </Container>
        </section>

      </Helmet>
    )
}

export default Home
