// Main starting point of the application
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');

const cors = require('cors')

//DB Setup
mongoose.connect('mongodb://localhost:votes/votes');


const app = express();

//App Setup
app.use(morgan('combined'));

app.use(cors()) //CORS middleware on express side
// app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
router(app);

//Server Setup(Express)
const port = process.env.PORT || 1234;
const server = http.createServer(app);
server.listen(port, ()=>{
  console.log(`server is on: ${port}`)
} )
