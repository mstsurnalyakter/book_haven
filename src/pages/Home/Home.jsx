import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../components/Banner/Banner'
import Books from '../../components/Books/Books'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Books/>
    </div>
  )
}

Home.propTypes = {}

export default Home