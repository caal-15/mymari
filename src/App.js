import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ThoughtsPage from './ThoughtsPage'
import NumberedThoughtsPage from './NumberedThoughtsPage'

const App = () => (
  <BrowserRouter basename="/mymari">
    <Switch>
      <Route exact path="/" component={ThoughtsPage} />
      <Route path="/numbered/:page" component={NumberedThoughtsPage} />
    </Switch>
  </BrowserRouter>
)

export default App
