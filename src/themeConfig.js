import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  primary: {
    main: green[700],
  },
  secondary: {
    main: '#11cb5f',
  },
})

export default Theme;