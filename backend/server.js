// Modules

const fs = require('fs');
const path = require("path");
const data = require('./fakeDatabase/db.json');
const uuid = require("uuid");
const express = require('express');

// Express Application

const app = express();

// Serving Static Files and encode request objects in json formats

//   WE HAVE NO PATH FOR THE INDEX.HTML PAGE, MAKE PATH RIGHT AWAY

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));

// all data, to view api in clean way in the browser
// This application uses /api/notes to serve the route

app.get("/api/", (req, res) => {
  res.sendFile(path.join(__dirname, "/backend/fakeDatabase/db.json"))
  res.json(data)
});

// This isn't using a database, this is using a fs module as a way
// fake DB

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/backend/fakeDatabase/db.json"))
  res.json(data)
})

app.post("/api/notes", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./backend/fakeDatabase/db.json"));
  const newNotes = req.body;
  console.log(newNotes)
  // create unique ids for the req objects
  newNotes.id = uuid.v4();
  data.push(newNotes);
  fs.writeFileSync("./backend/fakeDatabase/db.json", JSON.stringify(data))
  res.json(data);
});

app.put("/api/notes/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./backend/fakeDatabase/db.json"));
  for( var i in data ) {
    if( data[i].id === req.params.id ) {
      console.log(req.body.body);
      console.log(data[i].body);
      data[i].body = req.body.body
    }
  }
  fs.writeFileSync("./backend/fakeDatabase/db.json", JSON.stringify(data))
  res.json(data);
})


app.delete("/api/notes/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./backend/fakeDatabase/db.json"));
  const removeNote = data.filter((targeted) => targeted.id !== req.params.id);
  fs.writeFileSync("./backend/fakeDatabase/db.json", JSON.stringify(removeNote))
  res.json(removeNote);
})

// for heroku

const port = process.env.PORT || 3001;

app.listen(port, () => console.log('Launch Application'))