import { useState } from "react"


function App() {
 const [color, setColor] = useState("yellow");

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
     <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-4xl p-3">
     <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-4xl "
     onClick={() => setColor("purple")}>
 purple
</button>

<button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("gray")}>
 GRAY
</button>
<button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("pink")}>
  PINK
</button>

<button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("olive")}>
 OLIVE
</button>

<button className="bg-white text-black font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("white")}>
 WHITE
</button>

<button className="bg-black  text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("black")}>
  BLACK
</button>

<button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("green")}>
 GREEN
</button>

<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("blue")}>
 BLUE
</button>

<button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("red")}>
  RED
</button>

<button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-4xl "
onClick={() => setColor("yellow")}>
 YELLOW
</button>
     </div>


      </div>
     </div>
    </>
  )
}

export default App
