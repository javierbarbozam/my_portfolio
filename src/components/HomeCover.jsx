import { HomeNavbar } from "./Navbar";

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
      <img className="smile-home" src="../assets/smile-home.webp" alt="" />
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
