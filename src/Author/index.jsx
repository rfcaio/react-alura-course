import React from 'react'

import AuthorTable from './AuthorTable'

const Author = ({ authors }) => (
  <div>
    <AuthorTable authors={authors} />
  </div>
)

export default Author
