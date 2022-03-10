const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./public/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./public/contact.html', { root: __dirname });
});

app.use((req, res, next) => {
  res.status(404).sendFile('./public/404.html', { root: __dirname });
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
