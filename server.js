const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const autoReap = require('multer-autoreap');
const app = express();
const upload = multer({ dest: 'uploads'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use(autoReap);

app.post('/', upload.any(), (req,res) => {
  res.send({ size: req.files[0].size });
});

app.get('*', (req, res) => res.redirect('/'));

app.listen(process.env.PORT || 3000);