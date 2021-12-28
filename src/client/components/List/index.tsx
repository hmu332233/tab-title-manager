import React from 'react';

type ListItemProps = {};
function ListItem({  }: ListItemProps) {
  return (
    <div className="panel-block">
      <span className="panel-icon">
        <i className="fas fa-book" aria-hidden="true" />
      </span>
      <b>커스텀 제목</b> - https://naver.com
      <button className="delete ml-auto" />
    </div>
  );
}

type ListProps = {};
function List({  }: ListProps) {
  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div className="panel">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </section>
  );
}

export default List;
