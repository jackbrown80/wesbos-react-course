import React from 'react'
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index)
  }

  render() {
    const { desc, image, name, price, status } = this.props.details
    const isAvailable = status === 'available'

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out'}
        </button>
      </li>
    )
  }
}

// Export needed so that other files can use this component
export default Fish
