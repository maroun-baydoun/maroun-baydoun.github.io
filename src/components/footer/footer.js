
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SocialLinks from './social-links';

const styles = theme => ({
  footer: {
    top: 'auto',
    bottom: 0,
    width: '100%',
    position: 'fixed',
    padding: theme.spacing(1, 4),
    backgroundColor: theme.palette.grey[200]
  },
});

const Footer = ({classes}) => (
  <footer className={classes.footer} >
    <Grid container justify="flex-end" spacing={8} >
      <Grid item xs={12} lg={4}>
        <SocialLinks/>
      </Grid>
    </Grid>
  </footer>
);

export default withStyles(styles)(Footer);