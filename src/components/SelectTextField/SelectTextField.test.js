import React from 'react'
import { shallow } from 'enzyme'
import SelectTextField from './SelectTextField'

describe('SelectTextField', () => {
  it('should render correctly', () => {
    const component = shallow(<SelectTextField options={[]} />)

    expect(component).toMatchSnapshot()
  })
})
