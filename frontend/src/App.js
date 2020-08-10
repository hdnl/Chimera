import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import ImageUpload from './ImageUpload';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bottom: {
    marginTop: theme.spacing(12),
  },
  text: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
}));

function App() {
	const classes = useStyles();
  return (
    <div className="App">
			<AppBar position="absolute" color="default" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Chimera
					</Typography>
				</Toolbar>
			</AppBar>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3}> 
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <ImageUpload/>
          </Paper>
        </Grid> 
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <ImageUpload/>
          </Paper>
        </Grid> 
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.bottom}> 
        <Grid item xs={8}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Divider />
        <Typography align="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
