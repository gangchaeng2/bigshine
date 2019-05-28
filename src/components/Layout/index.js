import React from 'react'
import { Helmet } from 'react-helmet'
import propTypes from 'prop-types'

import Header from '../Header'

import { 
  GlobalStyle
} from './styled'

const Layout = ({
  children
}) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: propTypes.node
}