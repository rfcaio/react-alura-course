import React from 'react'

import AuthorForm from './AuthorForm'
import AuthorTable from './AuthorTable'

class Author extends React.Component {
  constructor (props) {
    super(props)
    this.state = { authors: props.authors }
  }

  render () {
    let { authors } = this.state
    return (
      <div>
        <AuthorForm />
        <AuthorTable authors={authors} />
      </div>
    )
  }
}

export default Author
