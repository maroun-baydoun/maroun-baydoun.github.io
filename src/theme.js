import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';


const theme = createMuiTheme({
  typography: {
    fontFamily: `'Open Sans', sans serif`,
    h1: {
      fontSize: "2rem",
      fontFamily: `'Cutive Mono', monospace`,
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily: `'Cutive Mono', monospace`,
    },
    h3: {
      fontSize: "1.2rem",
      fontFamily: `'Cutive Mono', monospace`,
    }
  },
  palette: {
    primary: grey,
    secondary: blueGrey,
  },
});

export default theme;