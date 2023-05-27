import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Unidade.css";
const Unidade = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  return (
    <div className="unidade">
      <div className="fluentbox-24-filled5" />
      <div className="footer5" />
      <div className="unidade-child" />
      <img className="unidade-item" alt="" src="/frame-43@2x.png" />
      <div className="rectangle-parent17" onClick={onGroupContainerClick}>
        <div className="group-child33" />
        <div className="incio">Início</div>
      </div>
      <div className="solarstar-bold-duotone5" />
      <div className="vecteezy-restaurant-logo-food-parent">
        <img
          className="vecteezy-restaurant-logo-food-icon10"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-2@2x.png"
        />
        <b className="fastgrill-idp">FastGrill - IDP Asa Norte</b>
        <div className="sgan-609-mdulo">
          SGAN 609 Módulo A - Asa Norte, Brasília - DF, 70830-401
        </div>
        <b className="aberto-at-as">Aberto até as 18:00hrs</b>
        <div className="frame-child" />
      </div>
      <div
        className="selecionar-unidade-wrapper"
        onClick={onFrameContainer1Click}
      >
        <b className="selecionar-unidade">Selecionar unidade</b>
      </div>
      <div className="vecteezy-restaurant-logo-food-group">
        <img
          className="vecteezy-restaurant-logo-food-icon10"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-2@2x.png"
        />
        <b className="fastgrill-idp">FastGrill - IDP Asa Sul</b>
        <div className="sgan-609-mdulo">
          SGAS II 607 Módulo 49 - Asa Sul, Brasília - DF, 70200-670
        </div>
        <b className="aberto-at-as">Fechado no momento</b>
        <div className="frame-item" />
      </div>
      <div
        className="selecionar-unidade-container"
        onClick={onFrameContainer3Click}
      >
        <b className="selecionar-unidade">Selecionar unidade</b>
      </div>
      <img
        className="vecteezy-restaurant-logo-food-icon12"
        alt=""
        src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced21.svg"
      />
    </div>
  );
};

export default Unidade;
