import React from 'react'
import styled from 'styled-components'

import logo from './assets/logo.jpg'

const LogoImg = styled.img`
  width: 30px;
  height: 30px;
`

const Header: React.FC = () => {
  return (
    <div>
      <h2>
        Movies Clash
        <span>
          <LogoImg src={logo} alt="Our logo" />
        </span>
      </h2>
    </div>
  )
}

export default Header
