import React from 'react'
import './ChiefGuest.css'
import photo from './vikramchopra.jpeg'
const ChiefGuest = () => {
    return (
        <div className='ChiefGuest'>
            <h2 className='vim'>Our Chief Guest</h2>
            <div className='ChiefGuestContent'>
                <div className='ChiefGuestPhoto'>
                    <img src={photo} />
                </div>
                <p>Vikram Chopra is the Co-Founder and Chief Executive Officer of CARS24. He is a former Co-Founder of FabFurnish and Investment Analyst of Sequoia Capital and was Business Analyst at McKinsey & Company.
                    Mr. Chopra received a BTech and MTech in Engineering at Indian Institute of Technology, Bombay, and earned an MBA in Finance at the Universityof Pennsylvania - The Wharton School.
                    <ul>
                        <li>CO-FOUNDER AND CEO @CARS24</li>
                        <li>CO-FOUNDER @FABFURNISH</li>
                        <li>EX-INVESTMENT ANALYST @SEQUOIA CAPITAL</li>
                        <li>EX_BUSINESS ANALYST @MCKINSEY AND COMPANY</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}
export default ChiefGuest;