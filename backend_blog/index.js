// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// let cors = require('cors');
// app.use(cors());
// let bodyParser = require('body-parser');
// app.use(bodyParser.json());

// const userRoute = require("./myrouter");
// mongoose
//   .connect("mongodb+srv://Nithiyaraj:Mongo@Nithi86@cluster0.jom7xgt.mongodb.net/")
//   .then((x) => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo", err.reason);
//   });
// app.use("/mangal",userRoute);

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );






// const port = process.env.PORT || 5000;
// const server = app.listen(port, () => {
//   console.log("Connected to port " + port);
// });
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
 
// });


// // 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });

// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./myrouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// const mongoURI = 'mongodb+srv://Nithiyaraj:Mongo@Nithi86@cluster0.jom7xgt.mongodb.net/';
const mongoURI = 'mongodb+srv://Nithiyaraj:Mongo%40Nithi86@cluster0.jom7xgt.mongodb.net/blog_app';

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  });

app.use('/mangal', userRoute);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// 404 Error
app.use((req, res, next) => {
  res.status(404).send('404 - Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).send(err.message || 'Internal Server Error');
});
