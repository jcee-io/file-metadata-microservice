const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));


if(process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

app.post('/', upload.any(), (req,res) => {
  console.log(req.files, req.body, req.query);
  res.send(req.files);
});


app.listen(process.env.PORT || 3000);