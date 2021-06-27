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



const UpdateModal = ({ task, setTask }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/update', {
        newTask: task,
      })
      .then((response) => window.alert('Task updated'))
      .catch((err) => console.log(err));

    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size='large' color='green'>
          Update
        </Button>
      }
    >
      <Modal.Header>Please Update The Task</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={task} wrapped />
        <Modal.Description>
          <Header>Enter Your task of the day to update</Header>
          <Form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              placeholder='enter here'
              onChange={handleChange}
              value={task}
            />
            <Button color='black' onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content='Update Task'
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

export default UpdateModal;
