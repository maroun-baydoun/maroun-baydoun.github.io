
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Home from 'mdi-material-ui/Home';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import LinkedinBox from 'mdi-material-ui/LinkedinBox';
import StackOverflow from 'mdi-material-ui/StackOverflow';

const styles = theme => ({
  container: {
    color: theme.palette.primary.main,
  },
  link: {
    color: 'inherit',
  },
});

const SocialLinks = ({ classes }) => (
  <Grid container spacing={1} justify="space-around" className={classes.container}>
    <Grid item>
      <a href="http://www.maroun-baydoun.com" rel="me home" title="Maroun Baydoun's homepage" aria-label="Maroun Baydoun's homepage" className={classes.link}>
        <Home />
      </a>
    </Grid>

    <Grid item>
      <a href="https://github.com/maroun-baydoun" target="_blank" rel="external noreferrer noopener me" title="Github" aria-label="Maroun Baydoun's Github account" className={classes.link}>
        <GithubCircle />
      </a>
    </Grid>

    <Grid item>
      <a href="https://stackoverflow.com/users/2185759/maroun-baydoun" target="_blank" rel="external noreferrer noopener me" title="Stack Overflow" aria-label="Maroun Baydoun's Stack Overflow account" className={classes.link}>
        <StackOverflow />
      </a>
    </Grid>

    <Grid item>
      <a href="https://linkedin.com/in/marounbaydoun" target="_blank" rel="external noreferrer noopener me" title="Linkedin" aria-label="Maroun Baydoun's Linkedin account" className={classes.link}>
        <LinkedinBox />
      </a>
    </Grid>

  </Grid>
);

export default withStyles(styles)(SocialLinks);