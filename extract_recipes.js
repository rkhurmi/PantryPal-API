const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const huggingFaceResponse = await axios.get('https://api.huggingface.co/models');
    const models = huggingFaceResponse.data;

    res.json(models);
  } catch (error) {
    console.error('Error fetching data from Hugging Face:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
