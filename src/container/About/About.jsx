import React from 'react'
import './About.css'
import Counter from '../../components/Counter/Counter.jsx';
const About = () => {
  return (

    <>
      <div id="About">
        <div className='about'>
          <h2>ABOUT US</h2>
          <div className='aboutt'>
            <div className='about-content'>
              In recent years, we've realised the transformative power of technology, propelling ventures to remarkable heights.
              Fueled by curiosity, IEEE Student Branch of JIIT Noida presents Xenith’24 - ‘The Incognito Realm’, our flagship event.
              This annual technical fest is a vibrant showcase of innovation and skill-building, inviting students to embrace new challenges
              and cultivate confidence. With the 'The Incognito Realm' theme, Xenith'24 invites you to delve into the unknown, pushing boundaries
              and unlocking hidden potential. Embark on a journey of self-discovery, fasten your safety jackets, and join us for an
              exhilarating exploration into the enigma!
            </div>
            <Counter eventDate={"2024-02-03T23:59:59"} />
          </div>
        </div>
      </div >
    </>



  )
}

export default About