require('dotenv').config();
require('./connection/database');
const express = require('express');
const bodyParser = require('body-parser');
const Task = require('./models/task');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

let count = 0; // API call count

// middlewares
app.use(bodyParser.json());
app.use(cors());

// routes

// endpoint to add the task
app.post('/add', (req, res) => {
  count++;

  // as mentioned in the task clearing database before inserting the document
  Task.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('DB cleared');
    }
  });
  let task = new Task(req.body);
  task.save((err, task) => {
    if (err) {
      return res.json({
        error: 'Unable to store the Task',
      });
    }
    return res.status(200).json({
      id: task._id,
      message: 'Task added ',
    });
  });
});

// End Point to update the task

app.post('/update', (req, res) => {
  count++;
  Task.findOneAndUpdate(
    { id: 1 },
    {
      $set: { task: req.body.newTask },
    },
    { new: true },
    (err, task) => {
      if (err) {
        return res.json({
          message: 'Unable to find the task',
        });
      } else {
        return res.json({
          message: 'Updated Succesfully',
        });
      }
    }
  );
});

// API call endpoint

app.get('/count', (req, res) => {
  return res.json({
    count: count,
  });
});

//serve static assets in production
if(process.env.NODE_ENV==='production'){
  //set static folder
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server is up and running');
});
