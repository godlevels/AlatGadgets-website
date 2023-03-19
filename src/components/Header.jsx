import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import user from '../assets/images/user.png'



const Header = () => {

    const [header, setHeader] = useState(false)
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 80 ? setHeader(true) : setHeader(false)
        })
    })

    return (

        <div className={`${header ? 'bg-white shadow-lg' : 'bg-transparent'} fixed z-50 w-full transition-all duration-300`}>
            <div className='mx-20'>
                <div className="container mx-auto flex flex-col items-center md:gap-y-6 lg:flex-row lg:justify-between">
                    <div className='flex items-center gap-2 mt-3'>
                        <div>
                            <h1 className='text-[1.5rem] font-semibold text-[#6b70de]'>AlatGadget</h1>
                        </div>
                    </div>
                    
                    <div>
                        <ul className={`${header ? 'text-primary' : 'text-accent'} flex mt-3 gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
                            <li>
                                <Link to='home' className='text-[#0a1d37] font-medium'>Home</Link>
                            </li>
                            <li className="text-[#0a1d37] font-medium">
                                <Link to='shop' className='text-[#0a1d37] font-medium'>Shop</Link>
                            </li>
                            <li className="text-[#0a1d37] font-medium">
                                <Link to='cart' className='text-[#0a1d37] font-medium'>Cart</Link>
                            </li>
                        </ul> 
                    </div>

                    <div className="flex items-center gap-4">
                        <span className='cursor-pointer'>
                            <i class='ri-heart-line text-[20px] font-bold relative'></i>
                            <h1 className='absolute top-[87%] right-[60.5%] md:top-[87%] md:right-[55.5%] lg:top-[37%] lg:right-[19%] xl:top-[35%] xl:right-[12rem] bg-[#0a1d37] text-[#fff] px-1 text-[8px] font-medium z-10 rounded-full flex items-center justify-center w-3 h-3'>2</h1>
                        </span>

                        <span className='cursor-pointer'>
                            <i class='ri-shopping-bag-line text-[20px] font-bold relative'></i>
                            <h1 className='absolute top-[87%] right-[49%] md:bottom-[10%] md:right-[49%] lg:top-[40%] lg:right-[14.5%] xl:top-[36%] xl:right-[9rem] bg-[#0a1d37] text-[#fff] px-1 text-[8px] font-medium z-10 rounded-full flex items-center justify-center w-3 h-3'>1</h1>
                        </span>

                        <span className='cursor-pointer'>
                            <motion.img whileTap={{scale: 1.2}} className='w-7 text-[#0a1d37]' src={user} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>

        // <div className='w-full h-[70px] leading-[25px]'>
        //     <div>
        //         <div className='mx-20'>
        //             <div className='flex items-center justify-between'>
        //                 <div className='flex items-center gap-2 mt-3'>
        //                     <div>
        //                         <h1 className='text-[1.5rem] font-semibold text-[#6b70de]'>Multimart</h1>
        //                         <p>Since 1990</p>
        //                     </div>
        //                 </div>

        //                 <div className="navigation">
        //                     <ul className="flex items-center gap-[2.7rem] mb-0">
        //                         <li className='text-[#0a1d37] font-medium'>
        //                             <Link>Home</Link>
        //                         </li>
        //                         <li className="text-[#0a1d37] font-medium">
        //                             <Link>Shop</Link>
        //                         </li>
        //                         <li className="text-[#0a1d37] font-medium">
        //                             <Link>Cart</Link>
        //                         </li>
        //                     </ul>
        //                 </div>

        //                 <div className="flex items-center gap-4">
        //                     <span className='fav__icon'>
        //                         <i class='ri-heart-line font-bold'></i>
        //                     </span>

        //                     <span className='cart__icon'>
        //                         <i class='ri-shopping-bag-line font-bold'></i>
        //                     </span>

        //                     <span>
        //                         <img className='w-7 text-[#0a1d37]' src={user} alt="" />
        //                     </span>
        //                 </div>

        //                 <div className="hidden">
        //                     <span>
        //                         <i class='ri-menu-line'></i>
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header
