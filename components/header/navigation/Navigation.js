import React from 'react'

import Logo from '@/components/Logo/Logo';
import TopStripe from '../TopStripe';
import MenuContainer from '../MenuContainer';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="top-stripe">
        <span className="top-stripe-description">
          НОВОСТИ ШОУ-БИЗНЕСА
        </span>
      </div>


      <Logo />
      <MenuContainer />
    </nav>
  )
}