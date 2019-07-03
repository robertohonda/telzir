import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const SelectTextField = (props) => {
  const { options, MenuItemProps, ...textFieldProps } = props

  const renderOption = (option, index) => (
    <MenuItem key={index} value={option.value} {...MenuItemProps}>
      {option.label}
    </MenuItem>
  )

  return (
    <TextField select {...textFieldProps}>
      {options.map(renderOption)}
    </TextField>
  )
}

SelectTextField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ),
  MenuItemProps: PropTypes.object,
}

export default SelectTextField
