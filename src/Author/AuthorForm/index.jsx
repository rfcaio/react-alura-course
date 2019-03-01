import React from 'react'

class AuthorForm extends React.Component {
  constructor () {
    super()
    this.state = { email: '', name: '' }
  }

  onChangeInput (event) {
    let { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmitForm (event) {
    event.preventDefault()
    console.log(this.state)
  }

  render () {
    let { email, name } = this.state
    return (
      <form onSubmit={event => { this.onSubmitForm(event) }}>
        <div>
          <label>Name</label>
          <input name="name" type="text" value={name} onChange={event => { this.onChangeInput(event) }} />
        </div>

        <div>
          <label>Email</label>
          <input name="email" type="text" value={email} onChange={event => { this.onChangeInput(event) }} />
        </div>

        <div>
          <input type="submit" value="Add author" />
        </div>
      </form>
    )
  }
}

export default AuthorForm
