import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-child" />
      <b className="home1">Home</b>
      <div className="cardpio">Cardápio</div>
      <div className="header-item" />
      <div className="rea-do-cliente">Área do Cliente</div>
      <img
        className="vecteezy-restaurant-logo-food-icon1"
        alt=""
        src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced1.svg"
      />
      <img className="vector-icon1" alt="" src="/vector.svg" />
    </div>
  );
};

export default Header;
