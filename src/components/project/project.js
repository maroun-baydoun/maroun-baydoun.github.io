import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import GithubCircle from 'mdi-material-ui/GithubBox';
import CodeBrackets from 'mdi-material-ui/Web';

import Stack from "../stack";

const styles = theme => ({
  root: {
    width: '100%',
    height: 200,
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.grey[200],
  },
  container: {
    height: '100%',
  },
  stack: {
    alignSelf: "flex-end"
  }
});

const Project = ({ classes, project }) => (
  <Card component="article" elevation={1} className={classes.root}>
    <Grid direction="column" className={classes.container} justify="space-evenly" container>
      <Grid component="section" item>
        <Grid spacing={2} container>
          <Grid xs={10} item>
            <Typography variant="h3">{project.name}</Typography>
          </Grid>
          <Grid component="nav" xs={2} item>
            <Grid justify="flex-end" container>
              <Grid item>
                <a href={project.githubUrl} target="_blank" rel="noreferrer noopener external"
                  title={`${project.name} on Guithub`} aria-label={`${project.name} on Guithub`}>
                  <GithubCircle fontSize={"small"} color="primary" />
                </a>
              </Grid>
              <Grid item>
                <a href={project.url} title={`${project.name} project page`} aria-label={`${project.name} project page`}>
                  <CodeBrackets fontSize={"small"} color="primary" />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid component="section" item>
        <Typography variant="body2">{project.description}</Typography>
      </Grid>
      <Grid component="section" className={classes.stack} item>
        <Stack stack={project.stack} />
      </Grid>
    </Grid>
  </Card>
);

export default withStyles(styles)(Project);