import React from 'react'
import ReactDOM from 'react-dom'
import TripInfo from '../components/pages/TripInfo'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//         expect(true).toBe(true)
//     })
// })

// In props get : {...props}, trips from API }
// Display the location , dates, trip name, details

describe('Sample Test', () => {

    it('should test that true === true', () => {
        expect(true).toBe(true)
    })

    it('renders without crashing', () => {
        let props = {
            match : {
                params: {
                     id : '1'
                }
            },
            trips: [{id: 1,locations: [ {location: ''} ] }]

        }
        const div = document.createElement('div')
        let com = shallow( <TripInfo {...props}/>,{ disableLifecycleMethods: true }  )
        expect(com.length).toBe(1)

    })

    it('gets image from api', () =>{
        let props = {
            match : {
                params: {
                     id : '1'
                }
            },
            trips: [{id: 1,locations: [ {location: ''} ] }]

        }
        const mockRes = {};
        const mockJsonPromise = Promise.resolve(mockRes)
        const mockFetchPromise = Promise.resolve({
            // json: () => mockJsonPromise,
            url: " "
        })
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
        const wrapper = shallow(<TripInfo {...props}/>);
        expect(global.fetch).toHaveBeenCalledTimes(1);

    })
})
