import React from 'react'
import AppBar from '../../components/AppBar/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 56 + theme.spacing(2),
    padding: theme.spacing(2),
    height: '100%',
    backgroundColor: 'white',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64 + theme.spacing(2),
    },
  },
}))

const Layout = (props) => {
  const { renderRoutes, routes } = props
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar logoPath="logo.png" title="Telzir" />
      <main className={classes.main}>{renderRoutes(routes)}</main>
    </>
  )
}

export default Layout
