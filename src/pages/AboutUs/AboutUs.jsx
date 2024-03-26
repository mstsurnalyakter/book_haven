import React from 'react'
import PropTypes from 'prop-types'
import Slideshow from '../../components/Slideshow/Slideshow'
import About from '../../components/About/About'


const AboutUs = props => {
  return (
    <div>
    <Slideshow/>
    <About/>
    </div>
  )
}

AboutUs.propTypes = {}

export default AboutUs