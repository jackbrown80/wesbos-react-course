import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

class App extends React.Component {
  // Defining the initial state of App
  state = {
    fishes: {},
    order: {},
  }

  componentDidMount() {
    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(params.storeId)
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
  }

  addFish = (fish) => {
    // Takes a copy of the existing fishes state
    const fishes = { ...this.state.fishes }
    // Adds a new property in fishes for the new fish
    fishes[`fish${Date.now()}`] = fish
    // Overwrites the old fishes state with the new fishes
    this.setState({ fishes })
  }

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes }
    fishes[key] = updatedFish
    this.setState({ fishes })
  }

  deleteFis = (key) => {
    const fishes = { ...this.state.fishes }
    fishes[key] = null
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  addToOrder = (key) => {
    console.log(key)

    const order = { ...this.state.order }

    order[key] = order[key] + 1 || 1

    this.setState({ order })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              >
                {key}
              </Fish>
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    )
  }
}

export default App
