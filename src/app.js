import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import Header from './components/header';
import Footer from './components/footer';
import ProjectContainer from "./components/project-container";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Container component="main">
      <ProjectContainer />
    </Container>
    <Footer />
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('app-containter'));

export default App;