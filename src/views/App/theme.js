import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  dimensions: {
    drawer: {
      width: 240,
    },
  },
})

export default theme
