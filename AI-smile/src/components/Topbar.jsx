const Topbar = () => (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <input
        type="text"
        placeholder="Search"
        className="border rounded px-4 py-2 w-1/3 border-none shadow-xl 	"
      />
      <div className="flex items-center space-x-4">
        <div className="relative">
          🔔
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs px-1">3</span>
        </div>
        <img src="/src/assets/profile.svg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
  
  export default Topbar;
  