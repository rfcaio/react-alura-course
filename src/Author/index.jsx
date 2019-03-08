import React from 'react'

import AuthorForm from './AuthorForm'
import AuthorTable from './AuthorTable'

const authors = [
  { id: 1, name: 'Michael Moorcock', email: 'michael.moorcock@mail.com' },
  { id: 2, name: 'Robert E. Howard', email: 'robert.e.howard@mail.com' },
  { id: 3, name: 'H. P. Lovecraft', email: 'h.p.lovecraft@mail.com' }
]

class Author extends React.Component {
  constructor () {
    super()
    this.state = { authors }
  }

  addAuthor ({ email, name }) {
    this.setState(({ authors }) => {
      return { authors: [...authors, { id: Date.now(), email, name }] }
    })
  }

  render () {
    let { authors } = this.state
    return (
      <div>
        <h1>Authors</h1>
        <AuthorForm onAddAuthor={author => { this.addAuthor(author) }} />
        <AuthorTable authors={authors} />
      </div>
    )
  }
}

export default Author
