import React from 'react'

import AuthorForm from './AuthorForm'
import AuthorTable from './AuthorTable'

class Author extends React.Component {
  constructor (props) {
    super(props)
    this.state = { authors: props.authors }
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
        <AuthorForm onAddAuthor={author => { this.addAuthor(author) }} />
        <AuthorTable authors={authors} />
      </div>
    )
  }
}

export default Author
