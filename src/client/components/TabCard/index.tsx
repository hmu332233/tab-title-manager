import React from 'react';

type Props = {};

function TabCard({ }: Props) {
  return (
    <div className="card">
      <div className="card-content">
        커스텀 제목
        <br />
        https://naver.com
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          Edit
        </div>
        <div className="card-footer-item">
          Delete
        </div>
      </footer>
    </div>
  );
}

export default TabCard;