import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
      </div>
    )
  }
}

// Export needed so that other files can use this component
export default Inventory
