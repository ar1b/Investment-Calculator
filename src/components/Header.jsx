import React from 'react'
import HeaderIcon from '../../public/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header'>
        <img src={HeaderIcon} alt='Icon depicting a Money bag'/>
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header
