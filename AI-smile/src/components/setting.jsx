import React, { useState } from "react";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("Admin Profile");
  const [toggles, setToggles] = useState({
    aiMatching: true,
    imageUploads: true,
    verifiedDentists: true,
    notifyOnUpload: false,
    notifyOnSignup: true,
  });
  const [logo, setLogo] = useState(null); // State to store the uploaded logo

  const toggleSwitch = (key) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result); // Set the logo to the file URL
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("logoUpload").click();
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Admin Profile":
        return (
          <div>
            <p className="text-gray-500 text-sm mb-4">
              Dashboard <span className="text-black font-semibold">• Setting Profile</span>
            </p>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-xl font-bold">Haeen.Ai</h3>
                <p className="text-gray-600">hgf@example.com</p>
              </div>
              <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                Upload Image
              </button>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    defaultValue="Haeen Ai"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue="leanne@example.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Change Password</label>
                <div className="relative">
                  <input
                    type="password"
                    defaultValue="password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10"
                  />
                  <span className="absolute top-2 right-3 text-gray-500 cursor-pointer">👁️</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mt-4">
                Save
              </button>
            </form>
          </div>
        );

      case "Basic Controls":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Basic Controls</h2>
            <div className="bg-white border border-blue-400 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                <span>Enable AI Matching</span>
                <input
                  type="checkbox"
                  checked={toggles.aiMatching}
                  onChange={() => toggleSwitch("aiMatching")}
                  className="toggle toggle-sm"
                />
              </div>
              <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                <span>Allow Image Uploads</span>
                <input
                  type="checkbox"
                  checked={toggles.imageUploads}
                  onChange={() => toggleSwitch("imageUploads")}
                  className="toggle toggle-sm"
                />
              </div>
              <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg md:col-span-2">
                <span>Show Only Verified Dentists</span>
                <input
                  type="checkbox"
                  checked={toggles.verifiedDentists}
                  onChange={() => toggleSwitch("verifiedDentists")}
                  className="toggle toggle-sm"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </div>
            </div>
          </div>
        );

      case "Notifications":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="bg-white border border-blue-400 rounded-xl p-6 grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                <span>Notify On New Upload</span>
                <input
                  type="checkbox"
                  checked={toggles.notifyOnUpload}
                  onChange={() => toggleSwitch("notifyOnUpload")}
                  className="toggle toggle-sm"
                />
              </div>
              <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                <span>Notify On New User Signup</span>
                <input
                  type="checkbox"
                  checked={toggles.notifyOnSignup}
                  onChange={() => toggleSwitch("notifyOnSignup")}
                  className="toggle toggle-sm"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </div>
            </div>
          </div>
        );

      case "System Info":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">System Info</h2>
            <div className="bg-white border border-blue-400 rounded-xl p-6">
              <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-700">App Version:</span>{" "}
                  <span className="text-gray-500">v1.0.2</span>
                </div>
                <div>
                  <span className="text-gray-700">Last Update:</span>{" "}
                  <span className="text-gray-500">April 2025</span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-gray-700">Support Email:</span>{" "}
                  <span className="text-gray-500">support@yourapp.com</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "Update Logo":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Update Logo</h2>
            <div className="bg-white border border-blue-400 rounded-xl p-6 flex flex-col items-center">
              <div
                onClick={triggerFileInput}
                className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 cursor-pointer"
              >
                {logo ? (
                  <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
                ) : (
                  <span className="text-3xl text-blue-600">🖼️</span>
                )}
              </div>
              <input
                id="logoUpload"
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
                Update Logo
              </button>
            </div>
          </div>
        );

      default:
        return <p className="text-gray-500">Select a tab to view settings.</p>;
    }
  };

  return (
    <div className="flex p-6 bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-xl shadow-md p-4 mr-6">
        <h2 className="text-xl font-semibold mb-4">Setting</h2>
        <nav className="space-y-2">
          {["Admin Profile", "Basic Controls", "Notifications", "System Info", "Update Logo"].map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(item)}
              className={`w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100 ${
                activeTab === item ? "bg-blue-600 text-white font-medium" : "text-gray-700"
              }`}
            >
              {item}
            </button>
            ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">{renderContent()}</div>
    </div>
  );
};

export default Setting;