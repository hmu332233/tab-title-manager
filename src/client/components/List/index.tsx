import React from 'react';

type ListItemProps = {
  item: TabTitle,
  onDeleteClick: (id: string) => void,
};
function ListItem({
  item,
  onDeleteClick,
}: ListItemProps) {
  const { id, title, url } = item;
  const handleDeleteClick = () => onDeleteClick(id);
  return (
    <div className="panel-block">
      <span className="panel-icon">
        <i className="fas fa-book" aria-hidden="true" />
      </span>
      <b>{title}</b> - {url}
      <button className="delete ml-auto" onClick={handleDeleteClick} />
    </div>
  );
}

type ListProps = {
  list: Array<TabTitle>
  onDeleteItemClick: (id: string) => void,
};
function List({
  list,
  onDeleteItemClick,
}: ListProps) {
  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div className="panel">
          {list.map(item => (
            <ListItem key={item.id} item={item} onDeleteClick={onDeleteItemClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default List;
