import { SET_CALLING_DATA, SET_CALLING_DATA_LOADING } from './types'

export const setCallingData = (value) => ({
  type: SET_CALLING_DATA,
  payload: value,
})

export const setCallingDataLoading = (value) => ({
  type: SET_CALLING_DATA_LOADING,
  payload: value,
})
