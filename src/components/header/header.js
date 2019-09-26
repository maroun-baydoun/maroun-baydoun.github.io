
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#333"
  },
  h1: {
    color: "#fff"
  },
  h2: {
    color: "#ccc"
  }
});

const Header = ({ classes }) => (
  <AppBar className={classes.root} position="static" elevation={0}>
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h1" className={classes.h1}>maroun baydoun</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" className={classes.h2}>open source projects</Typography>
      </Grid>
    </Grid>
  </AppBar>
);

export default withStyles(styles)(Header);