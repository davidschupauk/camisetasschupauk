import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/CartContext'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'


const NavBar = () => { //{ title: 'ecommerce ', color='red'}
  const [categories, setCategories] = useState([])
  const {cart} = useContext(CartContext)

  useEffect(() => {
    getDocs(collection(db, 'categories')).then(res => {
      const categories = res.docs.map(cat => {
        return {id: cat.id, ...cat.data()}
      })
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
        {cart.length > 0 && <CartWidget />}
      </nav>
  )
}

export default NavBar