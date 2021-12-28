import React from 'react';

type Props = {};

function Form({  }: Props) {
  return (
    <section className="section is-flex-direction-column is-max-desktop">
      <div className="field">
        <label className="label">URL</label>
        <div className="control">
          <input className="input" type="text" placeholder="https://naver.com" />
        </div>
      </div>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" placeholder="제목" />
        </div>
      </div>
      <button className="button is-primary is-fullwidth">추가</button>
    </section>
  );
}

export default Form;
