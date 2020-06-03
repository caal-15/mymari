import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ThoughtsPage from './ThoughtsPage'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={ThoughtsPage} />
    </Switch>
  </BrowserRouter>
)

export default App
