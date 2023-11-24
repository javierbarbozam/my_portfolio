import { Link } from "react-router-dom"

const HomeNavbar = () => {
  return (
    <nav className="nav-home">
      <Link className="nav-home__item" to={"/about"}>Sobre mí</Link>
      <Link className="nav-home__item" to={"/portfolio"}>Portafolio</Link>
    </nav>
  )
}

const NavBar = () => {
  return (
    <nav className="nav">
      <Link className="nav__item" to={"/"}>Inicio</Link>
      <Link className="nav__item" to={"/about"}>Sobre mí</Link>
      <Link className="nav__item" to={"/portfolio"}>Portafolio</Link>
      <Link className="nav__item" to={"/contact"}>Contacto</Link>
    </nav>
  )
}

export {HomeNavbar, NavBar}