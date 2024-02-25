'use client'
import { useState } from 'react';
import QRCode from 'qrcode.react';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(128);
  const [color, setColor] = useState('#000000'); // Default color is black

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value, 10));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const generateQRCode = () => {
    // Generate QR code with the specified color
    // You can pass color as a prop to the QRCode component
  };

  return (
    <div className='bg-gradient-to-r from-purple-900 to-rose-900 h-screen
    pt-24 md:pt-80 px-2'>
      <div className='container mx-auto max-w-4xl bg-white rounded-md
       shadow md:grid md:grid-cols-3'>

      <div className="col-span-2 p-6 grid gap-4">

      <label>
        <h4 className='text-lg font-semibold'>Enter text or URL: </h4> 
        <input
         className='w-full py-1 px-3 text-gray-700 rounded-sm mt-3'
        type="text" placeholder='Enter The text or any URL' value={text} 
        onChange={handleTextChange} />
      </label>


      
      <label>
        <h4 className='text-lg font-semibold'>QR Code size (pixels): </h4>
        <input 
        className='w-full py-1 px-3 text-gray-700 rounded-sm mt-3'
        type="number"
        placeholder='Enter The Size of Url (22)'
        value={size} onChange={handleSizeChange} />
      </label>

      <div className='flex gap-2'>
      <label className='font-semibold text-md'>Color
        QR Code color:
        <input className=" ml-3"
        type="color" value={color} onChange={handleColorChange} />
      </label>
      </div>

      <button
       className=" max-w-xs ml-auto px-4 py-2
       text-white rounded-sm mt-4 text-xl
        disabled:bg-fuchsia-950 font-mono" disabled
      onClick={generateQRCode}>Scan and Test</button>
      {text && (
        <div>
          <h2 className='text-lg font-bold '>Generated QR Code:</h2>
          <div className='rounded-r-md flex flex-col items-center
    justify-center'>
          <QRCode value={text} size={size} fgColor={color} />
        </div>
        </div>
      )}
      </div>
    </div>
    </div>
  );
}
