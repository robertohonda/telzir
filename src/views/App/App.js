import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import store from '../../redux/store'
import MainRouter from '../../routes/MainRouter'
import theme from './theme'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
