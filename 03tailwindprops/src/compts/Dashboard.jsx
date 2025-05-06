import React from 'react';

function Dashboard() {
  return (
    <div className="container mt-4">

      {/* Carousel */}
      <div id="dashboardCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="Slide 1" style={{ height: '300px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img src="https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75" className="d-block w-100" alt="Slide 2"  style={{ height: '300px', objectFit: 'cover' }}/>
          </div>
          <div className="carousel-item">
            <img src="https://i.ytimg.com/vi/u1HyG535JY0/maxresdefault.jpg" className="d-block w-100 " alt="Slide 3" style={{ height: '300px', objectFit: 'cover' }} />
          </div>
        </div>

        
        <button className="carousel-control-prev" type="button" data-bs-target="#dashboardCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#dashboardCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Cards Section */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">Some quick insights about performance.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">Track new user registrations here.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">Generate reports and export data.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Content */}
      <div className="p-5 bg-primary text-white text-center rounded shadow mb-5">
        <h2>Welcome to the Admin Dashboard</h2>
        <p>Use the navigation to access your tools and analytics.</p>
      </div>
    </div>
  );
}

export default Dashboard;
