import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/area-do-cliente");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="header8">
      <b className="home9">Home</b>
      <div className="cardpio9" onClick={onCardpioTextClick}>
        Cardápio
      </div>
      <div className="rectangle-parent43" onClick={onGroupContainer2Click}>
        <div className="group-child92" />
        <div className="rea-do-cliente8">Área do Cliente</div>
      </div>
      <img
        className="vecteezy-restaurant-logo-food-icon21"
        alt=""
        src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced11.svg"
      />
      <img
        className="vector-icon28"
        alt=""
        src="/vector11.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default Header;
