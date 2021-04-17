import { 
  Typography, 
  AppBar, 
  Card,
  CardActionArea, 
  CardContent, 
  CssBaseline, 
  Grid, 
  Toolbar, 
  Container
} from '@material-ui/core';

import { Assignment } from '@material-ui/icons'

import Home from './appComponents/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Assignment />
          <Typography variant="h5">
            Note Taker
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
              Notes
            </Typography>
            <Typography variant='h8' align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            </Typography>
          </Container>
        </div>
      </main>
      <Home/>
    </div>
  );
}

export default App;
