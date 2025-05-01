import React from 'react';

function Projects() {
  return (
    <div className="container my-5">

      {/* Hero Banner */}
      <section className="text-center mb-5 p-5 bg-primary text-white rounded shadow">
        <h1 className="display-5 fw-bold">Our Projects</h1>
        <p className="lead">Explore what we're building and what we've achieved so far.</p>
      </section>

      {/* Section 1: Ongoing Projects */}
      <section className="mb-5">
        <h2 className="mb-4">Ongoing Projects</h2>
        <div className="row">
          {['Project Alpha', 'NextGen App', 'AI Dashboard'].map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{project}</h5>
                  <p className="card-text">This project is currently in development and showing great progress.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Completed Projects */}
      <section className="mb-5">
        <h2 className="mb-4">Completed Projects</h2>
        <div className="row">
          {['E-Commerce Site', 'Marketing Landing Page', 'Portfolio Website'].map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 bg-light shadow">
                <div className="card-body">
                  <h5 className="card-title">{project}</h5>
                  <p className="card-text">Successfully completed with full deployment and client satisfaction.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Project Stats / CTA */}
      <section className="p-5 bg-dark text-white text-center rounded">
        <h2>Over 25+ Projects Delivered</h2>
        <p className="lead">Join our growing list of successful partners today.</p>
        <button className="btn btn-outline-light mt-3">Start Your Project</button>
      </section>

    </div>
  );
}

export default Projects;
