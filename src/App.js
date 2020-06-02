import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ThoughtsPage from './ThoughtsPage'

const App = () => (
  <BrowserRouter basename="/mymari">
    <Switch>
      <Route exact path="/" component={ThoughtsPage} />
      <Route path="/:page" component={ThoughtsPage} />
    </Switch>
  </BrowserRouter>
)

export default App
