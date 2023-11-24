import { HomeNavbar } from "./Navbar";
import slogan from '../assets/smile-home.webp'

const name = () => {
  return (
    <div className="person">
      <h1 className="person__name">
      Javier<span className="person__last-name">Barboza</span>
    </h1>
    </div>
  );
};

const smile = () => {
  return (
    <div className="smile">
      <img className="smile-home" src={slogan} alt="" />
    </div>
  )
};

const HomeCover = () => {
  return (
    <div className="home-wrapper">
    {name()}
    {smile()}
    <HomeNavbar/>
    </div>
  )
};

export { HomeCover };
