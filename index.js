/* eslint-disable @typescript-eslint/camelcase */
const express = require('express')
const cors = require("cors")
const projects = require('./routes/project')
const activities = require('./routes/activity')
const news = require('./routes/new')

const app = express();

app.use(cors({
  origin: ['http://localhost', 'http://localhost:3000'],
}));

app.use('api', projects)
app.use('api', activities)
app.use('api', news)

app.listen(8088, () => console.log('Server for Siouks listening on port 3000!'));

