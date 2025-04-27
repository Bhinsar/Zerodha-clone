import React from 'react'

export default function Brojkrage() {
  return (
    <div className='grid grid-cols-3 mt-10'>
      <div className='col-span-2'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-2xl font-bold text-blue-500'>Brokerage Calculator</div>
        </div>
        <div className='my-9'>
          <ul className='flex flex-col gap-4 list-disc text-gray-600'>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required. shall be charged 220 contract note. Courier charges apply.</li>
            <li> For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower)</li>
            <li> If the account is in debit balance, any order placed will be charged per executed order instead of per executed order..</li>
          </ul>
        </div>
      </div>
      <div className='col-span-1'>
      <div className='flex flex-col items-center justify-center'>
          <div className='text-2xl font-bold text-blue-500'>List of charges</div>
        </div>
      </div>
    </div>
  )
}
