// Modules
const fs = require('fs');
const path = require("path");
const data = require('./fakeDatabase/db.json');
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

app.get("/api/users", (req, res) => {
  res.sendFile(path.join(__dirname, "/backend/fakeDatabase/db.json"))
  res.json(data.users)
})

app.post("/api/notes", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./backend/fakeDatabase/db.json"));
  const newNotes = req.body;
  newNotes.id = uuid.v4();
  data.notes.push(newNotes);
  fs.writeFileSync("./backend/fakeDatabase/db.json", JSON.stringify(data))
  res.json(data);
  console.log(data)
});

const port = 3001;

app.listen(port, () => console.log(`Server started on ${port}`))