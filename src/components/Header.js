import React from 'react';

function Header({ onGroupChange, onSortChange }) {
  return (
    <div className="header">
      <div className="display">
        <label>Group By: </label>
        <select onChange={(e) => onGroupChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="sort">
        <label>Sort By: </label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
