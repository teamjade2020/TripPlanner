import React from 'react'
import ReactDOM from 'react-dom'
import NewTrip from '../components/pages/NewTrip'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'


Enzyme.configure({ adapter: new Adapter() });

describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

//Display the trips, where start date > today date
// similar to PastTrip

it('renders without crashing', () => {
    let props = {
        current_user: { id: '1' }
    }
  let com = shallow( <NewTrip {...props}/> )
  expect(com.exists()).toBe(true)
})

it('takes the trip name ', () => {
    let props = {
        current_user: { id: '1' }
    }
  let com = shallow( <NewTrip {...props}/> )
  expect(com.find('Input#name').exists()).toBe(true)
})
