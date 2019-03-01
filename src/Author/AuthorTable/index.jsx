import React from 'react'

const AuthorTable = ({ authors }) => (
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
      {
        authors.map(({ id, name, email }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default AuthorTable
