import React from 'react'
import ReactDOM from 'react-dom'
import TripInfo from '../components/pages/TripInfo'
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

// In props get : {...props}, trips from API }
// Display the location , dates, trip name, details

describe('Sample Test', () => {
    it('renders without crashing', () => {
        let props = {
            match : {
                params: {
                     id : '1'
                }
            },
            trips: [{id: 1,locations: [] }]

        }
        const div = document.createElement('div')
        ReactDOM.render(<TripInfo {...props}/>,div)

    })
})
