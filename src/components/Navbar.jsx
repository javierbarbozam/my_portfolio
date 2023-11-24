import { Link } from "react-router-dom"

const HomeNavbar = () => {
  return (
    <nav className="nav">
      <Link className="nav__item" to={"/about"}>Sobre mí</Link>
      <Link className="nav__item" to={"/portfolio"}>Portafolio</Link>
    </nav>
  )
}

export {HomeNavbar}