import React from 'react'
import { Container } from 'reactstrap'
import HeroImgTwo from '../assets/images/herotwo.jpg'
const CommonSection = ({title}) => {
    return (
        // <section className='common__section'>
        //     <Container className='text-center'>
        //         <h1>{title}</h1>
        //     </Container>
        // </section>

        <section>
            <div className='absolute bg-cover h-[5px] flex items-center'>
                <img className='bg-white bg-center bg-no-repeat' src={HeroImgTwo} alt="" />
            </div>
            <Container className='text-center relative top-[2rem] md:top-[10rem]'>
                <h1>{title}</h1>
            </Container>
        </section>    
    )
}

export default CommonSection
