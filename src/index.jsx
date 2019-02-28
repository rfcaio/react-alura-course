import React from 'react'
import ReactDOM from 'react-dom'

import Author from './Author'

const authors = [
  { id: 1, name: 'Michael Moorcock', email: 'michael.moorcock@mail.com' },
  { id: 2, name: 'Robert E. Howard', email: 'robert.e.howard@mail.com' },
  { id: 3, name: 'H. P. Lovecraft', email: 'h.p.lovecraft@mail.com' }
]

const App = () => (
  <main>
    <h1>A simple React app.</h1>

    <section>
      <Author authors={authors} />
    </section>
  </main>
)

ReactDOM.render(<App />, document.getElementById('root'))
