import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './components/Header/Header'
import List from './components/List/List'

const App = () => {
  document.title = "E-Books"
  return (
    <Router>
      <Header />

      <Route exact path="/" component={List} />
      {/*<Route path="/about" component={About} />*/}
    </Router>
  )
}

export default App