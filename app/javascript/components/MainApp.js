import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'

class MainApp extends React.Component {
  render () {
      const {
      signed_in,
      sign_in_route,
      sign_out_route
    } = this.props


    return (
    <Router>
          <React.Fragment>
          {signed_in &&
              <div>
                <a href={sign_out_route}>Sign Out</a>
              </div>
            }
            {!signed_in &&
              <div>
                <a href={sign_in_route}>Sign In</a>
              </div>
            }
          </React.Fragment>
          <Switch>
          </Switch>
      </Router>
    );
  }
}

export default MainApp
