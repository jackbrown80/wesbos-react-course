import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  // Defining the initial state of App
  state = {
    fishes: {},
    order: {},
  }

  addFish = (fish) => {
    // Takes a copy of the existing fishes state
    const fishes = { ...this.state.fishes }
    // Adds a new property in fishes for the new fish
    fishes[`fish${Date.now()}`] = fish
    // Overwrites the old fishes state with the new fishes
    this.setState({ fishes })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App
