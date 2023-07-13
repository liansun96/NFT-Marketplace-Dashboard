import React from 'react'
import Navbar from '../Nav/Navbar'
import Collection from './Collection'

const CollectionList = () => {
  return (
    <div className='bg-secondary min-h-full'>
      <div className="sticky top-0 z-10">
        <Navbar/>
        <Collection/>
      </div>
    </div>
  )
}

export default CollectionList