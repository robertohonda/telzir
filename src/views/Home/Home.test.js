import React from 'react'
import { shallow } from 'enzyme'
import Home, {
  calculateCostWithRatePlan,
  calculateCostWithoutRatePlan,
} from './Home'
import configureStore from 'redux-mock-store'

const store = configureStore([])()

describe('Home', () => {
  it('should render correctly', () => {
    const component = shallow(<Home store={store} />)

    expect(component).toMatchSnapshot()
  })

  it('should calculate the cost correctly', () => {
    expect(calculateCostWithRatePlan('011', '016', 20, 'FALEMAIS30')).toEqual(0)
    expect(calculateCostWithoutRatePlan('011', '016', 20)).toEqual(38)
    expect(calculateCostWithRatePlan('011', '017', 80, 'FALEMAIS60')).toEqual(
      37.4,
    )
    expect(calculateCostWithoutRatePlan('011', '017', 80)).toEqual(136.0)
    expect(calculateCostWithRatePlan('018', '011', 200, 'FALEMAIS120')).toEqual(
      167.2,
    )
    expect(calculateCostWithoutRatePlan('018', '011', 200)).toEqual(380.0)
  })
})
