import React from 'react'

import AuthorForm from './AuthorForm'
import AuthorTable from './AuthorTable'

const Author = ({ authors }) => (
  <div>
    <AuthorForm />
    <AuthorTable authors={authors} />
  </div>
)

export default Author
