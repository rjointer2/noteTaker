const express = require('express');

const app = express();

app.get('/api/notes', (req, res) => {
  const notes = [
    {
      "title": "notes",
      "body": "note...",
      "id": 1
    },
    {
      "title": "notes",
      "body": "note...",
      "id": 2
    },
    {
      "title": "notes",
      "body": "note...",
      "id": 3
    },
  ];

  res.json(notes)

});

const port = 3001;

app.listen(port, () => console.log(`Server started on ${port}`))