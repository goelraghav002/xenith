import React from 'react';
import background from '../../assets/back.jpg';
import './Footer.scss';
import logo from '../../assets/ieee-logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div id="Contact">
            <div className="footer">
                <div className="Border">
                    {/* <img className="bg-img" src={background} alt="" /> */}
                    <div className="symbol">
                        <img className="logo" src={logo} alt="IEEE Logo" />
                       
                    </div>
                    <a className='phone'  href="https://www.google.com/maps/place/JAYPEE+INSTITUTE+OF+INFORMATION+TECHNOLOGY/@28.6312137,77.3683335,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce551491b3ce7:0x7335d9fcfd4d9db0!8m2!3d28.631209!4d77.3709084!16zL20vMDlqcXJt?entry=ttu" target='_blank'>
                    <div className="Location">
                        <div>
                            <IoLocationSharp fontSize='medium' />
                            <div className='location-content'>
                               
                                <p>XENITH 2024</p>
                                <p>Jaypee Institute Of Information Technology</p>
                                <p> Sector-62 , Noida </p>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                    </a>
                    <div className="contact">
                        <div>
                            <FaPhoneAlt />
                            <a className='phone' href="tel:+919116457772">Aryan Gupta:- +91 9116457772</a>
                           
                        </div>
                        <div>
                            <FaPhoneAlt />
                            <a className='phone' href="tel:+919506424755">Ansh Mishra:- +91 9506424755</a>
                        </div>
                        <div>
                            <MdEmail />
                        
                            <a href="mailto:ieeesbjiitdb@gmail.com" className='phone' >Email - ieeesbjiitdb@gmail.com</a>
                            
                        </div>
                    </div>
                    <div className="find-us">
                        <div className="icons">Find Us Here</div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/ieee-student-branch-jiit/" className="link">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.facebook.com/ieeesbjiit/" className="link">
                                <FaSquareFacebook />
                            </a>
                            <a href="https://github.com/ieeesbjiit" className="link">
                                <FaGithubSquare />
                            </a>
                            <a href="https://www.instagram.com/ieeesbjiit/" className="link">
                                <FaInstagramSquare />
                            </a>
                            <a href="https://www.youtube.com/c/IEEESBJIIT" className="link">
                                <FaYoutubeSquare />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
