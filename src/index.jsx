import React from 'react'
import ReactDOM from 'react-dom'

import Author from './Author'
import Home from './Home'

const App = () => (
  <main>
    <Home />
    <section>
      <Author />
    </section>
  </main>
)

ReactDOM.render(<App />, document.getElementById('root'))
