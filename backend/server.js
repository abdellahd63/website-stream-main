require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const body = require('body-parser');
const sequelize = require('./config/database');
const PannesRoute = require('./routes/PannesRoute');
const EmailSenderRoute = require('./routes/EmailSenderRoute');
const PDFGeneratorRoute = require('./routes/PDFGeneratorRoute');

const port = process.env.PORT || 8080;

//express app
const app = express();
 
//midleware
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({limit: '50mb', extended: true}));
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/Pannes', PannesRoute);
app.use('/EmailSender', EmailSenderRoute);
app.use('/EmailGenerator', PDFGeneratorRoute);

//connect to db
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
  
app.listen(5000, () => console.log('Express server is running at port : '+ 5000)); 
