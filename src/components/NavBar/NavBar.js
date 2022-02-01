import './NavBar.css'

const NavBar = () => {
    return (
      <nav className='NavBar'>
        <div>
          <img src={'./images/logo192.png'} alt='logo' height="50px"/>
        </div>
        <div>
            <h1 className="title">Camisetas del Mundo</h1>
        </div>
        <button className='Option'>Argentina</button>
        <button className='Option'>America</button>
        <button className='Option'>Europa</button>
        <button className='Option'>Selecciones</button>
      </nav>
    )
}

export default NavBar;