const Herosection = ({channel, button}) =>{
    console.log(channel);
   
    return(
        <>
    

        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-4">{channel}</h2>
          <p className="text-gray-600 mb-4">
            This is a simple card description. Add your content here.
          </p>
          <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
            {button || "visitme"}
          </button>
        </div>

     
        </>
    )
}

export default Herosection;