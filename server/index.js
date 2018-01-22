require('dotenv').config();
const controller = require('./controller/controller');
const bodyParser = require('body-parser');
const massive = require('massive');
const express = require('express');
const cors = require('cors');
const app = express();
const port  =  3080;

app.use(express.static('build'))
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
});

app.get('/api/data_retrieve', controller.retrieve_data);
app.get('/api/user_details/:id', controller.user_details);

app.listen(port, () => console.log(`listening on port ${port}`));