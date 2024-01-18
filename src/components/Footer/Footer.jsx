import React from 'react';
import background from '../../assets/back.jpg';
import './Footer.scss';
import logo from '../../assets/ieee-1.svg';
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
                        <p>STUDENT BRANCH JIIT</p>
                    </div>
                    <div className="Location">
                        <div>
                            <IoLocationSharp fontSize='medium' />
                            <div className='location-content'>
                                <p>XENITH 2024</p>
                                <p>Jaypee Institute Of Information Technology</p>
                                <p> Sector-62, Noida </p>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div>
                            <FaPhoneAlt />
                            <p>Aryan Gupta:- +91 9116457772</p>
                        </div>
                        <div>
                            <FaPhoneAlt />
                            <p>Ansh Mishra:- +91 9506424755</p>
                        </div>
                        <div>
                            <MdEmail />
                            <p>Email - ieeesbjiitweb@gmail.com</p>
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
