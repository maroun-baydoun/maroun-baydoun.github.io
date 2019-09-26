
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    listStyle: "none",
    padding: 0
  },
  chip: {
    margin: theme.spacing(0, 0.5, 0, 0),
  },
});

const Stack = ({ classes, stack }) => (
  <Grid component="ul" className={classes.root} container>
    {stack.map((tech) => (
      <Grid component="li" key={tech} item>
        <Chip label={tech} variant="outlined"  className={classes.chip} />
      </Grid>))}
  </Grid>
);

export default withStyles(styles)(Stack);