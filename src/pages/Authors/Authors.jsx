import React from 'react'
import PropTypes from 'prop-types'
import useAuthorData from '../../Hooks/useAuthorData'

const Authors = () => {
  const { authors, loading } = useAuthorData();
  console.log(authors,loading);
  return (
    <div>Authors</div>
  )
}

Authors.propTypes = {}

export default Authors