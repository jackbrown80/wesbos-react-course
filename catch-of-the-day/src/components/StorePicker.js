import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef()

  goToStore = (e) => {
    // This stops the page from refreshing when the form is submitted
    e.preventDefault()
    const storeName = this.myInput.current.value;
    // props.history contains access to router methods which we can use to change the page - called push state
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      // When form is submitted the goToStore function will run
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

// Export needed so that other files can use this component
export default StorePicker
