import React from 'react'
import Category from './Category'
import Navbar from '../Nav/Navbar'
import Table from './Table'

const BidsList = () => {
  return (
    <div className='bg-secondary min-h-screen'>
      <Navbar/>
      <Category/>
      <Table/>
    </div>
  )
}

export default BidsList