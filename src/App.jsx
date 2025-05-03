import React, { useState } from 'react'
import QRCode from 'react-qr-code';

const App = () => {
  const [inputValue,setInputvalue]=useState('');
  const [qrCode,setQRCode]=useState('');
  const [displayQrCode,setDisplayQrCode]=useState(false);
  const handleGenerateQRCode=()=>{
    setQRCode(inputValue)
    setDisplayQrCode(true)
    setInputvalue('')
  }
  return (
    <div className='max-w-[1920px] w-full mx-auto bg-gray-50'>
      <section className='h-screen md:py-5'>
        <div className='md:shadow-lg bg-white w-full px-4 sm:px-8  md:w-[700px] md:rounded-[10px] flex flex-col gap-10 md:mx-auto py-10'>
          <h1 className='text-2xl bg-gray-900 text-blue-400 text-center font-bold rounded-[5px] py-2'>QR Code Generator</h1>
          <div className='flex flex-col gap-4'>
              <label htmlFor="qr-code-value" className='text-xl text-gray-500 font-semibold'>
                  Value
              </label>
              <input type="text" name="" id="qr-code-value" className='bg-gray-50 px-4 py-2.5 w-full border-[1px] border-gray-500 rounded-[5px]  focus:outline-[1.5px] focus:outline-gray-700'      placeholder='Enter any value' value={inputValue} onChange={(e)=>setInputvalue(e.target.value)}/>
          </div>
          <div>
            <button disabled={inputValue.trim() == ""} className='bg-black text-white text-lg font-normal px-4 py-1.5 rounded-[5px] disabled:bg-gray-100 disabled:text-gray-300' onClick={handleGenerateQRCode}>Generate</button>
          </div>
        
              {
                displayQrCode && (
                  <div>
                  <h3 className='text-xl'>Generated QRCode:</h3>
                  <QRCode value={qrCode} className='w-[200px]' bgColor='#fff'/>
                  </div>
                )  
            }
        </div>
      </section>
    </div>
  )
}

export default App