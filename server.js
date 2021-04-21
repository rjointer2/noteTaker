// Modules
const fs = require('fs');
const path = require("path");
const data = require('./backend/fakeDatabase/db.json');
const uuid = require("uuid");
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// all data

app.get("/api/", (req, res) => {
  res.sendFile(path.join(__dirname, "/backend/fakeDatabase/db.json"))
  res.json(data)
});

// just notes 

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/backend/fakeDatabase/db.json"))
  res.json(data.notes)
})

// just users

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/backend/fakeDatabase/db.json"))
  res.json(data.users)
})

app.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("/backend/fakeDatabase/db.json"));
  const newNotes = req.body;
  newNotes.id = uuid.v4();
  notes.push(newNotes);
  fs.writeFileSync("/backend/fakeDatabase/db.json", JSON.stringify(notes))
  res.json(notes);
});

const port = 3001;

app.listen(port, () => console.log(`Server started on ${port}`))