import React, { useEffect, useState } from 'react';
import { Modal, Header, Button, Image } from 'semantic-ui-react';

import axios from 'axios';



const CountModal = ({ task }) => {
  const [open, setOpen] = useState(false);

  const [apiCalls, setApiCalls] = useState(-1);

  useEffect(() => {
    axios
      .get('/count')
      .then((response) => {
        setApiCalls(response.data.count);
      })
      .catch((err) => console.log(err));
  }, [task]);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size='large' color='violet'>
          API count
        </Button>
      }
    >
      <Modal.Header>API Calls </Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={task} wrapped />
        <Modal.Description>
          <Header>Total Number of API Calls</Header>

          {apiCalls < 0 ? (
            <p>No API calls have been made</p>
          ) : (
            <p>
              <strong>API calls : {apiCalls}</strong>
            </p>
          )}

          <Button color='black' onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default CountModal;
