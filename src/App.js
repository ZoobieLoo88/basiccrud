import React, { Component } from 'react'
import './App.css'
import { data } from './data'
import Create from './components/Create'
import Edit from './components/Edit'
import Products from './components/Products'
import { Route, withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  state = {
    products: null
  }

  componentDidMount = () => {
    this.setState({
    products:data
  })
  }
  
  deleteProduct = (id) => {
    const deleted = this.state.products.find(product => (
      product._id==id
    ))
    const index = this.state.products.indexOf(deleted)
    const products = this.state.products
    products.splice(index, 1)
    this.setState({
      products
    })
  }

  handleCreateSubmit = (newProduct) => {
    newProduct._id=uuidv4()
    this.setState(prevState => ({
      products: [...prevState.products, newProduct]
    }))
    this.props.history.push('/')
  }

  handleEditSubmit = (editProduct) => {
    const edited = this.state.products.find(product => (
      product._id==editProduct._id
    ))
    const index = this.state.products.indexOf(edited)
    const products = this.state.products
    products[index] = editProduct
    this.setState({
      products
    })
    this.props.history.push('/')
  }

  // Another way to edit the products array
  // handleEditAlt = (editProduct) => {
  //   this.setState(prevState => ({
  //     products: prevState.products.map(product=>(product._id==editProduct._id? editProduct:product))
  //   }))
  //   this.props.history.push('/')

  // }

  render() {
    return (
      <div className='app'>
        <Route path='/' exact>
          <Products
            products={this.state.products}
            deleteProduct={this.deleteProduct}
          />
        </Route>
        <Route path='/create'>
          <Create
            handleSubmit={this.handleCreateSubmit}
          />
        </Route>
        <Route path='/edit/:id'>
          <Edit
            products={this.state.products}
            handleSubmit={this.handleEditSubmit}
          />
        </Route>
      </div>
    )
  }
}

export default withRouter(App)