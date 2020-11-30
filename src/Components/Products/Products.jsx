import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

// const products = [
//   { id: 1, name: "Shoes", description: "Running Shoes...", price: '£5', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60' },
//   { id: 2, name: "Mac Book Pro", description: "Apple Mac Book Laptop", price: '£10', image:'https://images.unsplash.com/photo-1588511986609-328d6ecae609?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjJTIwYm9vayUyMHByb3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'}
// ]

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <main className={ classes.content }>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={ 4 }>
        { products.map((product) => (
          <Grid item key={ product.id } xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
            <Product product={ product }/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
