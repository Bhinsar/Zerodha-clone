import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import OpenAccount from '../../components/OpenAccount/OpenAccount'
import Eduction from './Eduction'

export default function HomePage() {
  return (
    <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing />
        <Eduction/>
        <OpenAccount/>
    </>
  )
}
