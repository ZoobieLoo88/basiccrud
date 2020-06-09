import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
  return (
    <div className='products'>
      {props.products && props.products.map((product, index) => (
        <div className="product">
          <h1>{product.name}</h1>
          <img src={product.imgURL} alt="" />
          <button onClick={() => { props.deleteProduct(product._id) }}>Delete</button>
          <Link to={`/edit/${product._id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
