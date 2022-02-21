import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({title, color, routing}) => {
  //Click en el boton Arg
  const handleArg = () => {
    console.log("ARGGGGG");
  }
  //Click en el boton America
  const handleAme = () => {
    console.log("America");
  }
  //Click en el boton Europa
  const handleEuro = () => {
    console.log("Eurooo");
  }
  //Click en el boton Seleccion
  const handleSele = () => {
    console.log("Seleee");
  }

    return (
      <nav className='NavBar'>
        <div className='titulo' onclick={()=> routing({path: 'list', id: 1})}>
          <div>
            <img src={'./images/logo192.png'} alt='logo' height="50px"/>
          </div>
          <div>
              <h1 className="title">{title}</h1>
          </div>
        </div>
        
        <Button label="Argentina" handleClick={handleArg}/>
        <Button label="America" handleClick={handleAme}/>
        <Button label="Europa" handleClick={handleEuro}/>
        <Button label="Selecciones" handleClick={handleSele}/>
        <CartWidget />
      </nav>
      
    )
}

export default NavBar;