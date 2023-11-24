import happyface from "../../assets/smily-face.webp";
import arrow from "../../assets/arrow.webp";

const description = () => {
  return (
    <div className="text-container">
      <h1 className="title">
        ¿Quién <span className="title title--black">es Javier?</span>
      </h1>
      <div className="text">
        <p className="text-item">
          Para esta sección pensaba
          <strong className="text__bold">
            &quot;¿qué puedo poner que ustedes no hayan leído ya?&quot;
          </strong>
          , y la verdad es que no supe. Así que mi solución fue
          <strong className="text__bold text__bold--orange"> fluir</strong>.
        </p>
        <p className="text-item">
          Dicen que soy analítico, observador y con un buen ojo para los
          detalles,
          <strong className="text__bold">me agradan esas cualidades</strong>.
        </p>
        <p className="text-item">
          También me veo como una persona tranquila. me gusta correr, la vida es
          muy linda y aveces{" "}
          <strong className="text__bold text__bold--orange">
            olvidamos vivirla
          </strong>
          .
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

const scrollGuide = () => {
  return (
    <>
      <span className="scroll-guide">
        ¿Por qué <img className="scroll-guide__arrow" src={arrow}></img>
        frontend?
      </span>
    </>
  );
};

const Biography = () => {
  return (
    <div>
      {description()}
      {faces()}
      {scrollGuide()}
    </div>
  );
};

export { Biography };
