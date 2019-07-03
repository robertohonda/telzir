import update from 'immutability-helper'
import { SET_CALLING_DATA, SET_CALLING_DATA_LOADING } from '../actions/types'

const initial = {
  loading: false,
  origin: '',
  destination: '',
  time: '',
  ratePlan: '',
  costWithRatePlan: null,
  costWithoutRatePlan: null,
}

const reducer = (state = initial, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_CALLING_DATA:
      return update(state, { $set: payload })
    case SET_CALLING_DATA_LOADING:
      return update(state, { loading: { $set: payload } })
    default:
      return state
  }
}

export default reducer
