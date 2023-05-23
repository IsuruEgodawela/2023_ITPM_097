const express = require('express');
const cors = require('cors');
const { connection } = require('./utils/connection');
const dotenv = require('dotenv');

const multer = require('multer');
const path = require('path');

//@import Routes
const employeeRouter = require('./routes/employee.route');
const userRouter = require('./routes/user.route');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE, HEAD, OPTIONS'
  );
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use(express.json());
console.log(path.join(__dirname, 'image'));

app.use('/image', express.static(path.join(__dirname, 'image')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req);
    cb(null, 'Backend/image');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
    // cb(null, 'image.jpg');
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

const update = multer({ storage: storage });
app.put('/api/update', update.single('file'), (req, res) => {
  res.status(200).json('File has been updated');
});

//use routes
app.use('/api/employee', employeeRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connection();
});
