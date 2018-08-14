import React from 'react'

class MoveToOption extends React.Component {
  render() {
    return (
      <option value={ this.props.id } selected={ this.props.book.shelf === this.props.id }>
        { this.props.title }
      </option>
    )
  }
}

export default MoveToOption
