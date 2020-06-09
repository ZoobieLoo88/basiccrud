import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Edit extends Component {
  state = {
    product: {
      name: '',
      price: '',
      imgUrl: ''
    }
  }

  componentDidMount = () => {
    const editProduct = this.props.products.find(product => (
      product._id==this.props.match.params.id
    ))
    this.setState({
      product:editProduct
    })
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // const {name, value} = e.target
    this.setState(prevState=>({
      product: {
        ...prevState.product,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <div>
        <form className="create-form" onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit(this.state.product)
        }}>
          <input
            placeholder='Name'
            value={this.state.product.name}
            name='name'
            onChange={this.handleChange}
          />
          <input
            placeholder='Price'
            value={this.state.product.price}
            name='price'
            onChange={this.handleChange}
          />
          <input
            placeholder='Image Link'
            value={this.state.product.imgURL}
            name='imgURL'
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
export default withRouter(Edit)