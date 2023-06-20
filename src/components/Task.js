import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, onToggleComplete, onDelete }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const handleToggleComplete = () => {
    onToggleComplete(id); 
  };

  const handleDeleteTask = () => {
    onDelete(id);
  };

  return (
    <li className="tasks__item">
      <button className={`tasks__item__toggle ${buttonClass}`} onClick={handleToggleComplete}>{title}</button>
      <button className="tasks__item__remove button" onClick={handleDeleteTask}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
