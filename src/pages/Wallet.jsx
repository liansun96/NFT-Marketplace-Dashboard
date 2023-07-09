import React from 'react'
import YourBalance from '../components/wallet/YourBalance'
import LatestTransaction from '../components/wallet/LatestTransaction'
import Card from '../components/wallet/Card'
import QuickTransfer from '../components/wallet/QuickTransfer'
import Navbar from '../components/Nav/Navbar'

export default function Wallet() {
  return (
    <main>
      {/* https://gigaland.io/images/background/19.jpg
      https://gigaland.io/images/background/8.jpg */}
      <Navbar/>
        <section className='flex bg-[#070B24] gap-5 px-5 h-full'>
            <div className='basis-2/3 mt-5'>
                <YourBalance/>
                <LatestTransaction/>
            </div>
            <div className='basis-1/3 mt-5'>
              <Card/>
              <QuickTransfer/>
            </div>
        </section>
    </main>
  )
}
