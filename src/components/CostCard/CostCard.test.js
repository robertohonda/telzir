import React from 'react'
import { shallow } from 'enzyme'
import CostCard from './CostCard'

describe('CostCard', () => {
  it('should render correctly', () => {
    const component = shallow(<CostCard title="Title" cost="20.00" />)

    expect(component).toMatchSnapshot()
  })
})
