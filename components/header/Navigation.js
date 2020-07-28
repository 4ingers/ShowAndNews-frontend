import React from 'react'

import Logo from '../Logo';
import TopStripe from './TopStripe';
import MenuContainer from './MenuContainer';

export default function Navigation() {
  return (
    <nav className="navigation" role="navigation">
      <TopStripe />
      <Logo />
      <MenuContainer />
    </nav>
  )
}