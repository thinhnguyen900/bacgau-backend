const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('audio'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file received' });
  console.log('Đã nhận file:', req.file.originalname);
  res.json({ message: 'Bác Gấu đã nhận được rồi nhé!' });
});

app.listen(port, () => {
  console.log();
});
