import happyface from "../../assets/smily-face.webp";

const description = () => {
  return (
    <div className="text-container">
      <h1 className="title">
        Goma <span className="title title--black">en la silla</span>
      </h1>
      <div className="text">
        <p className="text-item">
          Cada vez que codeaba,
          <strong className="text__bold">me volvía uno con mi silla.</strong> Se
          me iba el tiempo trabajando, hasta dejar las cosas lo mejor posible.
        </p>
        <p className="text-item">
          Disfruto ver los procesos mentales para llegar a distintas soluciones
          y hacer las cosas funcionar.
          <strong className="text__bold"> Es un proceso retador,</strong>
          <strong className="text__bold text__bold--orange">
            {" "}
            pero gratificante.
          </strong>
        </p>
        <p className="text-item">
          Me gusta haber descubierto este mundo, ya que puedo hacer que las
          personas se involucren e interactuen con lo que{" "}
          <strong className="text__bold">creamos.</strong>
        </p>
      </div>
    </div>
  );
};

const faces = () => {
  return (
    <div className="faces">
      <img className="faces-item faces-item--right" src={happyface} alt="" />
      <img className="faces-item faces-item--left" src={happyface} alt="" />
    </div>
  );
};

const Frontend = () => {
  return (
    <div>
      {description()}
      {faces()}
    </div>
  );
};

export { Frontend };
