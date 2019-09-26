
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Project from "../project";

const styles = theme => ({
    root: {
        minHeight: '50vh',
        padding: theme.spacing(4, 0),
        marginBottom: theme.spacing(4)
    }
});

const projects = [
    {
        name: 'new-hope',
        description: 'Esperanto Tokenizer',
        url: 'http://www.maroun-baydoun.com/projects/new-hope/',
        githubUrl: 'https://github.com/maroun-baydoun/new-hope',
        stack: ['TypeScript', 'Webpack']
    },
    {
        name: 'Mediaq',
        description: 'Listen to media query updates in JavaScript',
        url: 'http://www.maroun-baydoun.com/projects/mediaq/',
        githubUrl: 'https://github.com/maroun-baydoun/mediaq',
        stack: ['TypeScript', 'Webpack']
    },
    {
        name: 'Evented',
        description: 'Fire and listen to events in JavaScript',
        url: 'http://dev.maroun-baydoun.com/evented/',
        githubUrl: 'https://github.com/maroun-baydoun/evented',
        stack: ['TypeScript', 'Webpack']
    },
];

const ProjectContainer = ({ classes }) => (
    <Grid className={classes.root} spacing={4} justify="center" container>
        {projects.map((project) => (
            <Grid key={project.name} xs={12} lg={4} md={6} item>
                <Project project={project} />
            </Grid>
        ))}
    </Grid>
);

export default withStyles(styles)(ProjectContainer);