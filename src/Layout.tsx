import React from 'react'

import styled from 'styled-components'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const LayoutBox = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
`

const Layout: React.FC = () => {
  return (
    <LayoutBox>
      <Header />
      <Body />
      <Footer />
    </LayoutBox>
  )
}

export default Layout
