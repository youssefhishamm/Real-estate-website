import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our platform Story' subtitle='Check out our website story and work process' />

            <p> At Edugate, our soul focus is to assist you in finding the perfect school for your child's education by taking into account their unique preferences, requirements, and goals. We understand that every child is different, and their educational journey should reflect their individual needs.

Our platform is meticulously designed to make the school search process simpler and more efficient for parents like you. We aim to provide you with a seamless experience where you can easily explore and compare a comprehensive range of educational institutions. 
.</p>
            

          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
