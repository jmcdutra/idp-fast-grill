import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  return (
    <div className="header1">
      <b className="home2">Home</b>
      <div className="cardpio2" onClick={onCardpioTextClick}>
        Cardápio
      </div>
      <div className="header-item" />
      <div className="rea-do-cliente1">Área do Cliente</div>
      <img
        className="vecteezy-restaurant-logo-food-icon7"
        alt=""
        src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced1.svg"
      />
      <img className="vector-icon4" alt="" src="/vector.svg" />
    </div>
  );
};

export default Header;
