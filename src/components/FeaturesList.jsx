import React from 'react';
import './FeaturesList.css';

export default function FeaturesList() {
  return (
    <div className='features' id='feature-dropdown'>
      <p>
        <img src='/assets/icon-todo.svg' alt='todo' />
        Todo List
      </p>
      <p>
        <img src='/assets/icon-calendar.svg' alt='calendar' />
        Calendar
      </p>
      <p>
        <img src='/assets/icon-reminders.svg' alt='reminders' />
        Reminders
      </p>
      <p>
        <img src='/assets/icon-planning.svg' alt='planning' />
        Planning
      </p>
    </div>
  );
}
