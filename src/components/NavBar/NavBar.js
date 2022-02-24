import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories, getProductsByCategory } from '../../asyncmock'

const NavBar = () => { //{ title: 'ecommerce ', color='red'}
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])



  return (
      <nav className="NavBar" >
        <div>
            <h2><Link to={`/`}>CASACAPP</Link></h2>
        </div>
        <div className="Categories">
          {categories.map(cat => 
            <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar