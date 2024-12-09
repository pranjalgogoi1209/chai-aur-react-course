import { useState } from 'react'

function App() {
  let [bgColor, setBgColor] = useState("Olive")

  /* let handleClick = e => {
    setBgColor(e.target.innerText)
    console.log(bgColor);
  } */

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor : bgColor}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-white">
            <button className="bg-red-800 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Red</button>
            <button className="bg-green-800 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Green</button>
            <button className="bg-blue-800 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Blue</button>
            <button className="bg-yellow-800 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Olive</button>
            <button className="bg-gray-500 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Gray</button>
            <button className="bg-yellow-300 text-black outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Yellow</button>
            <button className="bg-pink-800 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Pink</button>
            <button className="bg-purple-800 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Purple</button>
            <button className="bg-orange-800 outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>Orange</button>
            <button className="bg-white text-black outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => {setBgColor(e.target.innerText)}}>White</button>
            <button className="bg-black outline-none px-4 py-1 rounded-full shadow-lg" onClick={e => setBgColor(e.target.innerText)}>Black</button>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
