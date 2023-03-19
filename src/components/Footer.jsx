import React from 'react'
import { Container, Row, Col, } from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer>
            <div className='bg-[#0a1d37]'>
                <div className='mx-20 flex items-center'>
                    <div>
                        <div>
                            <div>
                                <h1 className='text-[1.5rem] font-semibold text-[#6b70de]'>AlatGadget</h1>
                            </div>
                            <p className='leading-5 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur dolore ullam neque debitis inventore, ipsa fuga magni a adipisci.</p>
                        </div>
                    </div>

                    <div>
                        <div className="footer__quick-links">
                            <h4 className='quick__links-title'>Useful Links</h4>

                            <ul>
                                <li className='ps-0 border-0'>
                                    <Link to='/shop' className='text-slate-500'>Shop</Link>
                                </li>
                                <li className='ps-0 border-0'>
                                    <Link to='/cart' className='text-slate-500'>Cart</Link>
                                </li>
                                <li className='ps-0 border-0'>
                                    <Link to='/login' className='text-slate-500'>Login</Link>
                                </li>
                                <li className='ps-0 border-0'>
                                    <Link to='/signup' className='text-slate-500'>Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                    <div className="footer__quick-links">
                            <h4 className='quick__links-title'>Contact</h4>

                            <ul>
                                <li className='ps-0 border-0'>
                                    <span><i class='ri-map-pin-line'></i></span>
                                    <p>23, Mini Complex. Roundabout, Ibadan. Nigeria.</p>
                                </li>
                                <li className='ps-0 border-0'>
                                    <span><i class='ri-phone-line'></i></span>
                                    <p>+2349145657890</p>
                                </li>
                                <li className='ps-0 border-0'>
                                    <span><i class='ri-mail-line'></i></span>
                                    <p>alat@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-center">
                        &copy; AlatGadget {year}. All Right Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
