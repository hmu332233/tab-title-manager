import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container is-max-desktop is-flex is-justify-content-center">
          <div className="navbar-brand">
            <a className="navbar-item">
              <h1 className="title has-text-weight-bold">
                <span className="has-text-primary">Tab-Title</span> Manager
              </h1>
            </a>
          </div>
        </div>
      </nav>
      <section className="section">
        <div className="container is-max-desktop">
          <div className="box">
            I'm in a box.
          </div>
          <div className="box">
            I'm in a box.
          </div>
          <div className="box">
            I'm in a box.
          </div>
          <div className="box">
            I'm in a box.
          </div>
        </div>
      </section>
    </>
  );
}


export default App;