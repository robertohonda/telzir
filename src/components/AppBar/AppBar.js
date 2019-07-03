import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginLeft: theme.spacing(0.5),
    fontSize: 20,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0.5),
      fontSize: 24,
    },
  },
  logo: {
    height: 40,
    [theme.breakpoints.up('sm')]: {
      height: 50,
    },
  },
}))

const CustomAppBar = (props) => {
  const classes = useStyles(props)
  const { logoPath, title, ...appBarProps } = props

  return (
    <AppBar {...appBarProps}>
      <Toolbar className={classes.toolbar}>
        <img className={classes.logo} alt="logo" src={logoPath} />
        <Typography className={classes.title} variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

CustomAppBar.propTypes = {
  logoPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default CustomAppBar
