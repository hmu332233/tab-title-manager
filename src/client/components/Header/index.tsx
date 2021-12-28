import React from 'react';

type Props = {};

function Header({  }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-weight-bold">
          <span className="has-text-primary">Tab Title</span> Manager
        </h1>
        <h2 className="subtitle is-6">
          탭의 제목을 자유롭게 <b>커스텀!</b>
        </h2>
      </div>
    </section>
  );
}

export default Header;
