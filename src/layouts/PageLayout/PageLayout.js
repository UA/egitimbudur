import React from 'react'
// eslint-disable-next-line no-unused-vars
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

import Header from '../../components/Header'

export const PageLayout = ({ children }) => (
  <div className='container'>
   <Header />
   {children}
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
