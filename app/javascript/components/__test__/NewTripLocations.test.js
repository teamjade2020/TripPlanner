import React from 'react'
import ReactDOM from 'react-dom'
import NewTripLocations from '../pages/NewTripLocations'
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
  const div = document.createElement('div')
  let com = shallow( <NewTripLocations {...props}/> )
  expect(com.length).toBe(1)
})

it('takes the loction name ', () => {
    let props = {
        current_user: { id: '1' }
    }
  let com = shallow( <NewTripLocations {...props}/> )
  expect(com.find('Input#location').exists()).toBe(true)
})

it('takes the start date ', () => {
    let props = {
        current_user: { id: '1' }
    }
  let com = shallow( <NewTripLocations {...props}/> )
  expect(com.find('Input#start_date').exists()).toBe(true)
})

it('takes the end date ', () => {
    let props = {
        current_user: { id: '1' }
    }
  let com = shallow( <NewTripLocations {...props}/> )
  expect(com.find('Input#end_date').exists()).toBe(true)
})

it('takes details ', () => {
    let props = {
        current_user: { id: '1' }
    }
  let com = shallow( <NewTripLocations {...props}/> )
  expect(com.find('Input#details').exists()).toBe(true)
})

it('has a handleSubmit method ', () => {
    const mockFn = jest.fn();
    const component = shallow(<NewTripLocations onSubmit={mockFn} />);
    const button = component.find('Link').at(0);
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled()
})