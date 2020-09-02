import React from 'react'
import logo from './assets/logo.jpg'
import styled from 'styled-components'

const Imggg = styled.img`
  width: 30px;
  height: 30px;
`

function Logo() {
  return (
    <div>
      <h2>
        Movies Clash
        <span>
          <Imggg src={logo}></Imggg>
        </span>
      </h2>
    </div>
  )
}

export default Logo
