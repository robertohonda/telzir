import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'

describe('Layout', () => {
  it('should render correctly', () => {
    const component = shallow(<Layout renderRoutes={() => {}} />)

    expect(component).toMatchSnapshot()
  })
})
