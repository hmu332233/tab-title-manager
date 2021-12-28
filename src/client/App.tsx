import React from 'react';

import TabCard from './components/TabCard';

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
          <TabCard />
          <TabCard />
        </div>
      </section>
    </>
  );
}


export default App;