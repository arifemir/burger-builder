import React from 'react'
import { BurgerBuilder } from './BurgerBuilder'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BuildControlPanel from '../components/BurgerBuilder/BuildControlPanel/BuildControlPanel'

configure({ adapter: new Adapter() })


describe('<BurgerBuilder />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder initIngr={() => { }} initTotalPrice={() => {}}/>)
  })

  it('should render <BuildControlPanel /> when receiving ingredients', () => {
    wrapper.setProps({ ingredients: { salad: 0 } })
    expect(wrapper.find(BuildControlPanel)).toHaveLength(1)
  })
})
