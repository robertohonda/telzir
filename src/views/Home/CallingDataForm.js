import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import SelectTextField from '../../components/SelectTextField/SelectTextField'

const CallingDataForm = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    origins,
    touched,
    callingRates,
    ratePlans,
    setFieldValue,
    handleSubmit,
    isSubmitting,
    isValid,
    dirty,
  } = props

  const getAvailableDestinations = (origin) =>
    Object.keys(callingRates[origin] == null ? {} : callingRates[origin])

  const onChangeOrigin = (e) => {
    setFieldValue('origin', e.target.value)
    setFieldValue('destination', '')
  }
  const generateOptions = (arrayData) =>
    arrayData.map((value) => ({ label: value, value }))

  return (
    <Grid
      container
      direction="row"
      component="form"
      spacing={2}
      onSubmit={handleSubmit}
    >
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SelectTextField
              label="Origem"
              name="origin"
              fullWidth
              value={values.origin}
              onChange={onChangeOrigin}
              onBlur={handleBlur}
              options={generateOptions(origins)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <SelectTextField
              label="Destino"
              name="destination"
              fullWidth
              value={values.destination}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              options={generateOptions(getAvailableDestinations(values.origin))}
              disabled={values.origin === ''}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={6} md={4} lg={5}>
            <TextField
              label="Tempo"
              type="number"
              name="time"
              fullWidth
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              error={Boolean(touched.time && errors.time)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">minutos</InputAdornment>
                ),
                inputProps: {
                  min: 0,
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={4} lg={5}>
            <SelectTextField
              name="ratePlan"
              label="Plano FaleMais"
              fullWidth
              options={ratePlans}
              value={values.ratePlan}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!dirty || !isValid || isSubmitting}
            >
              Calcular
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CallingDataForm
