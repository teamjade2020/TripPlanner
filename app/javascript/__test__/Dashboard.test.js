import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from '../components/pages/Dashboard'
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

describe('Sample Test', () => {
    it('renders without crashing', () => {
        let props = {
            match : {
                params: {
                     id : '1'
                }
            },
            trips: [ {id: 1,user_id: 1,locations: [{start_date: '2020-04-01', end_date: '2020-04-10'}]},
            {id: 2,user_id: 1,locations: [{start_date: '2020-01-01', end_date: '2020-01-10'}]} ,
            {id: 2,user_id: 2,locations: [{start_date: '2020-01-01', end_date: '2020-01-10'}]} ],
            current_user: {id: '1'}

        }
        const wrapper = mount(<Dashboard {...props}/>);
        // const div = document.createElement('div')
        // ReactDOM.render(<PastTrip {...props}/>,div)
        const com = wrapper.find('Col')
        expect(com.length).toBe(1)

    })
})
