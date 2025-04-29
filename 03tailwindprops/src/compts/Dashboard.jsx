const Dashboard = () => {
    return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome to the Dashboard!</p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-4">Card One</h2>
          <p className="text-gray-600 mb-4">
            This is a simple card description. Add your content here.
          </p>
          <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-4">Card Two</h2>
          <p className="text-gray-600 mb-4">
            Another simple card for your awesome website.
          </p>
          <button className="mt-auto bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
            Learn More
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-4">Card Three</h2>
          <p className="text-gray-600 mb-4">
            You can customize these cards easily with Tailwind.
          </p>
          <button className="mt-auto bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
    </>
    );
  };
  
  export default Dashboard;