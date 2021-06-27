import React from 'react';
import ClockComponent from './clock/ClockComponent';
import TaskComponent from '../components/task/TaskComponent';

import './app.css';
import NewsComponent from './news/NewsComponent';

const App = () => {
  return (
    <div>
      <div className='app'>
        <ClockComponent />
        <TaskComponent />
      </div>
      <NewsComponent />
    </div>
  );
};

export default App;
