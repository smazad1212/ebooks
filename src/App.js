import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './components/Header/Header'
import List from './components/List/List'
import AddBook from './components/Form/AddBook'

const App = () => {
  document.title = "E-Books"
  return (
    <Router>
      <Header />

      <Route exact path="/" component={List} />
      <Route path="/add" component={AddBook} />
    </Router>
  )
}

export default App