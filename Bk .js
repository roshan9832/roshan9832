const express = require('express');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imagePath = req.file.path;

    // Gemini API को इमेज भेजें
    const response = await axios.post('https://gemini-api.com/process', {
      image: imagePath,
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
