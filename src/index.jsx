import React from 'react'
import ReactDOM from 'react-dom'

import Author from './Author'
import Home from './Home'

const authors = [
  { id: 1, name: 'Michael Moorcock', email: 'michael.moorcock@mail.com' },
  { id: 2, name: 'Robert E. Howard', email: 'robert.e.howard@mail.com' },
  { id: 3, name: 'H. P. Lovecraft', email: 'h.p.lovecraft@mail.com' }
]

const App = () => (
  <main>
    <Home />
    <section>
      <Author authors={authors} />
    </section>
  </main>
)

ReactDOM.render(<App />, document.getElementById('root'))
