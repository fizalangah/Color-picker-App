"use client";
import { useState,ChangeEvent } from 'react';


export default function ColorPicker() {
    const [color, setColor] = useState<string>("#000000");

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setColor(e.target.value);
      };


      const copyToClipboard = (): void => {
        navigator.clipboard.writeText(color); // Write the color value to the clipboard
        alert("Copy Successfully!"); // Alert the user that the color was copied
      };
  return (
    <div className='flex justify-center items-center '>
<div className='bg-white lg:h-[530px] h-[400px] lg:w-[400px] w-[300px] border-2 rounded-xl mt-[100px]' >
    <h1 className='flex justify-center items-center text-center mt-[20px] text-xl font-bold lg:text-2xl'> <span className='text-red-500'>Co</span> <span className='text-blue-500'>lor</span> <span className='text-green-500'>Pi</span> <span className='text-yellow-500'>cker</span> </h1>
    <p className='flex justify-center items-center text-center mt-[10px] text-gray-500'>Select a color and copy the hex and RGB values.</p>

    <div className='p-10 flex justify-center items-center lg:ml-[40px]  st mt-[20px] rounded-xl lg:h-[180px] lg:w-[300px]'  style={{background:color}}></div>
      <h2 className='flex justify-center items-center text-center font-bold lg:text-3xl text-2xl mt-[20px]'>{color}</h2>
      <div className="text-gray-500 dark:text-gray-400 flex justify-center items-center text-center">
              RGB: {parseInt(color.slice(1, 3), 16)},{" "}
              {parseInt(color.slice(3, 5), 16)},{" "}
              {parseInt(color.slice(5, 7), 16)}
            </div>
      <div>
        <button onClick={copyToClipboard} className='bg-slate-800 p-1 flex justify-center items-center text-center lg:w-[300px] w-[200px] rounded-xl ml-[50px] text-white mt-[20px]'>Copy to Clipboard</button>
      </div>
      <div>
       <input type="color"
       value={color}
       onChange={handleColorChange} className='bg-gray-500 lg:h-[50px] lg:w-[300px] w-[200px] mt-[20px] ml-[50px] outline-none'/></div>
</div>
    </div>
  )
}
