import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
import Dashboard from '../pages/Dashboard.js'
import MainApp from '../MainApp.js'
import {BrowseRouter as Router} from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() });

describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

//Display the trips, where start date > today date
// similar to PastTrip

describe('Dashboard', () => {
    it('returns API call results', async () => {

      const mockRes = {};
      const mockJsonPromise = Promise.resolve(mockRes)
      const mockFetchPromise = Promise.resolve({
          // json: () => mockJsonPromise,
          trips: []
      })
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
      // jest.spyOn(window,'fetch').mockImplementation(() => mockFetchPromise)
      const wrapper = shallow(<MainApp />); // 5

      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

});
