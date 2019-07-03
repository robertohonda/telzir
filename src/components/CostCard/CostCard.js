import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#6E6E6E',
  },
}))
const CostCard = (props) => {
  const classes = useStyles(props)
  const { title, cost, loading } = props
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        }
      />
      <CardContent>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <CircularProgress size={44} className={classes.progress} />
          </div>
        ) : (
          <Typography color="primary" variant="h3" align="center">
            {cost}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

CostCard.propTypes = {
  title: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  loading: PropTypes.bool,
}

export default CostCard
