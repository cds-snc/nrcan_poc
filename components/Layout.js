import React from 'react'
import AlphaBanner from '../components/AlphaBanner'
import FederalBanner from '../components/FederalBanner'
import Link from 'next/link'

const layoutStyle = {}

const Layout = props => (
  <div>
    <header>
      <AlphaBanner />
      <FederalBanner />
    </header>
    {props.children}
  </div>
)

export default Layout
