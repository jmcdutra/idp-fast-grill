import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/pagamentoforma");
  }, [navigate]);

  return (
    <div className="header7">
      <b className="home8">Home</b>
      <div className="cardpio8" onClick={onCardpioTextClick}>
        Cardápio
      </div>
      <div className="rectangle-parent32">
        <div className="group-child77" />
        <div className="rea-do-cliente7">Área do Cliente</div>
      </div>
      <img
        className="vecteezy-restaurant-logo-food-icon19"
        alt=""
        src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced11.svg"
      />
      <img
        className="vector-icon41"
        alt=""
        src="/vector11.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default Header;
