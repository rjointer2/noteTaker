import { 
  Typography, 
  AppBar,
  CssBaseline, 
  Toolbar, 
  Container,
  Grid,
} from '@material-ui/core';

import  {
  Assignment
} from '@material-ui/icons'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import Home from './appComponents/Home';
import Navbar from './appComponents/Navbar';
import NoteDetails from './appComponents/noteCompoenets/NoteDetails';
import CreateNote from './appComponents/CreateNote'


function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <Assignment />
            <Grid 
              justify="space-between"
              container
              spacing={1}
            >
              <Typography variant="h5">
                &nbsp;Note Taker
              </Typography>
              <Navbar />
            </Grid>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
                Welcome
              </Typography>
              <Typography  align="center" color="textSecondary" paragraph>
                Welcome to the note taker web application, where you can write notes with a rich text editor. You can go to the "new note" link to create a new document, save, update and delete as you like! Hope you enjoy and please feel free to use this as reference to any of your projects!
              </Typography>
            </Container>
          </div>
        </main>
        <div className="content">
          <Switch>
            {/* Home Component */}
            <Route exact path="/">
            <Home />
            </Route>
            {/* New Note Component */}
            <Route path="/create">
            <CreateNote />
            </Route>
            {/* Note Route Parameters */}
            <Route path="/api/notes/:id" component={NoteDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


