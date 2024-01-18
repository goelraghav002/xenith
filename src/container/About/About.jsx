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
              In the past few years we have grown to realise that technology is
              the fuel that can drive the simplest of ventures to wondrous
              heights. With new things coming up every now and then, we often
              wonder the depth of innovation and ideation that we are surrounded
              with and are curious to learn and explore more about this abyss and
              “Pursuit the Abyss” with passion and motivation, hoping to uncover
              some pearls of knowledge. To make this quest for learning more
              interesting and to help you reach the “zenith” of your abilities,
              IEEE Student Branch of JIIT Noida,is back with its flagship event,
              Xenith’23 - Pursuit of Abyss. Xenith is IEEE JIIT’s flagship event,
              an annually organised technical fest when the entire campus comes
              alive to the exciting theme and buzzes with a plethora of events
              giving students an opportunity to try their hands at various new
              challenges and develop new skills as well as cultivate confidence
              and build as a team player. This year, Xenith gets bigger and better
              as it pushes you to dive into the unknown and seek more than what
              meets the eye. Its all about exploring yourself while you pursuit
              the abyss! Tighten your safety jackets, hold your breaths and dive
              in!
            </div>
            <Counter eventDate={"2024-02-03T23:59:59"} />
          </div>
        </div>
      </div >
    </>



  )
}

export default About