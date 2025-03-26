import { useState } from 'react'
import './App.css'
import Welcome from './Welcome'
import Greeting from './Greeting'
import ItemList from './Conditonal'
import ItemsRender from './ItemsRender'
import ControlledForm from './Controlled'
import UnCrontrolledForm from './Uncontrolled'
import FormExample from './FormSubmission'


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import { ProductProvider } from './ProductContext'

function App() {
  // const [count, setCount] = useState(0)
  // const productList = [
  //   { id: 1, name: "Laptop", stock: 5 },
  //   { id: 2, name: "Phone", stock: 0 },
  //   { id: 3, name: "Headphones", stock: 2 },
  //   { id: 4, name: "Keyboard", stock: 0 }
  // ]

  // return (
  //   <>
  //   {/* <Welcome prop1='EVERYONE' prop2='GOOD NOON' />
  //   <Greeting /> */}
  //   {/* <ItemList /> */}
  //   {/* <ItemsRender products = {productList} /> */}
  //   {/* <ControlledForm />
  //   <UnCrontrolledForm /> */}
  //   {/* <FormExample /> */}
  //   <ProductList />
  //   </>
  // )

  return(
    <>
    <ProductProvider>
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </ProductProvider>
    <></>
    </>
  )
}

export default App
