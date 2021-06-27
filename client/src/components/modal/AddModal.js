import React, { useState } from 'react';
import {
  Modal,
  Header,
  Form,
  FormInput,
  Button,
  Image,
} from 'semantic-ui-react';

import axios from 'axios';
const AddModal = ({ task, setTask }) => {
  const [open, setOpen] = useState(false);
  const [addTask, setAddTask] = useState('');

  const handleChange = (event) => {
    setAddTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/add', {
        task: addTask,
      })
      .then((response) => window.alert('Task added '))
      .catch((err) => console.log(err));
    setTask(addTask);
    setAddTask('');
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size='large' color='purple'>
          Add
        </Button>
      }
    >
      <Modal.Header>Enter the Task to Add</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={task} wrapped />
        <Modal.Description>
          <Header>Enter Your task of the day to add</Header>
          <Form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              placeholder='enter here'
              onChange={handleChange}
              value={addTask}
            />
            <Button color='black' onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content='Add Task'
              labelPosition='right'
              icon='checkmark'
              type='submit'
              positive
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AddModal;
