import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Author from './Author'
import Book from './Book'
import Home from './Home'

const App = props => (
  <main>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </nav>
    <section>{props.children}</section>
  </main>
)

ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/authors" component={Author} />
        <Route path="/books" component={Book} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'))
