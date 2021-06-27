import React, { useState } from 'react';
import { Resizable } from 're-resizable';

import './TaskComponents.css';

import AddModal from '../modal/AddModal';
import UpdateModal from '../modal/UpdateModal';
import CountModal from '../modal/CountModal';

const TaskComponent = () => {
  const [task, setTask] = useState('');

  return (
    <div className='tasks'>
      <Resizable
        defaultSize={{
          width: '60vw',
          height: '80vh',
        }}
      >
        <h1>Task of the day is </h1>
        <h2>{task}</h2>
        <div>
          <AddModal task={task} setTask={setTask} />
          <UpdateModal task={task} setTask={setTask} />
          <CountModal task={task} />
        </div>
      </Resizable>
    </div>
  );
};
export default TaskComponent;
