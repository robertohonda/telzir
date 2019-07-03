import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import CostCard from '../../components/CostCard/CostCard'
import Grid from '@material-ui/core/Grid'
import { callingRates, ratePlans, ratePlansFreeMinutes } from '../../data'
import { connect } from 'react-redux'
import {
  setCallingData,
  setCallingDataLoading,
} from '../../redux/actions/callingData'

import { Formik } from 'formik'
import CallingDataForm from './CallingDataForm'
import callingDataSchema from './callingDataSchema'

const useStyles = makeStyles((theme) => ({
  priceSection: {
    marginTop: theme.spacing(3),
  },
}))

export const calculateCostWithRatePlan = (
  origin,
  destination,
  time,
  ratePlan,
) => {
  const tax = callingRates[origin][destination].cost
  const freeMinutes = ratePlansFreeMinutes[ratePlan]

  return Math.max(time - freeMinutes, 0) * 1.1 * tax
}

export const calculateCostWithoutRatePlan = (origin, destination, time) => {
  const tax = callingRates[origin][destination].cost
  return time * tax
}

const Home = (props) => {
  const classes = useStyles()
  const { callingData, setCallingData, setCallingDataLoading } = props
  const origins = Object.keys(callingRates)

  const onSubmitCalculate = (callingData, { setSubmitting }) => {
    const { origin, destination, time, ratePlan } = callingData
    const costWithRatePlan = calculateCostWithRatePlan(
      origin,
      destination,
      time,
      ratePlan,
    )
    const costWithoutRatePlan = calculateCostWithoutRatePlan(
      origin,
      destination,
      time,
    )
    setCallingDataLoading(true)
    setTimeout(() => {
      setCallingData({
        ...callingData,
        costWithoutRatePlan,
        costWithRatePlan,
      })
      setSubmitting(false)
    }, 1000)
  }

  const inputsSection = (
    <Formik
      onSubmit={onSubmitCalculate}
      validationSchema={callingDataSchema}
      initialValues={callingData}
      render={(props) => (
        <CallingDataForm
          origins={origins}
          callingRates={callingRates}
          ratePlans={ratePlans}
          {...props}
        />
      )}
    />
  )

  const priceSection = (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CostCard
          loading={callingData.loading}
          title="Com FaleMais"
          cost={
            callingData.costWithRatePlan == null
              ? '- -'
              : `$ ${callingData.costWithRatePlan.toFixed(2)}`
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CostCard
          loading={callingData.loading}
          title="Sem FaleMais"
          cost={
            callingData.costWithoutRatePlan == null
              ? '- -'
              : `$ ${callingData.costWithoutRatePlan.toFixed(2)}`
          }
        />
      </Grid>
    </Grid>
  )

  return (
    <div>
      <div>{inputsSection}</div>
      <div className={classes.priceSection}>{priceSection}</div>
    </div>
  )
}

const mapStateToProps = ({ callingData }) => ({ callingData })

export default connect(
  mapStateToProps,
  {
    setCallingData,
    setCallingDataLoading,
  },
)(Home)
