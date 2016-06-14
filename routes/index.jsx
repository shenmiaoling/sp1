import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'
import Application from '../views/app'
import NotFound from '../views/404'
import CommonPerson from '../views/CommonPerson'
import ExpertPerson from '../views/ExpertPerson'
import ExpertPersonSystem from '../views/ExpertPersonSystem'
import Experts from '../views/experts'
import Expert from '../views/experts/expert'
import Patents from '../views/patents'

module.exports = () => {
  return <Router history={browserHistory}>
    <Route path='/' component={Application}>
    <IndexRoute component={Experts}/>
      <Route path="*" component={NotFound} />
    }
    </Route>
  </Router>
}
