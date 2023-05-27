import { useCallback } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./PagamentoForma.css";
const PagamentoForma = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/pagamentoconferir");
  }, [navigate]);

  return (
    <div className="pagamento-forma">
      <div className="fluentbox-24-filled" />
      <div className="footer" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <img
          className="vecteezy-restaurant-logo-food-icon"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced2.svg"
        />
        <b className="fast-grill-">FAST GRILL - IDP</b>
        <div className="todos-os-direitos">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header">
        <div className="header-child" />
        <div className="home" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="cardpio" onClick={onCardpioTextClick}>
          Cardápio
        </div>
        <div className="header-item" />
        <div className="rea-do-cliente">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon1"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced4.svg"
        />
        <img className="vector-icon" alt="" src="/vector7.svg" />
      </div>
      <div className="pagamento-forma-child" />
      <div className="solarstar-bold-duotone-wrapper">
        <div className="solarstar-bold-duotone" />
      </div>
      <div className="pagamento-forma-item" />
      <div className="forma-de-pagamento">Forma de pagamento</div>
      <div className="selecione-o-mtodo">Selecione o método de pagamento</div>
      <div className="identifique-se">Identifique-se</div>
      <div className="pagamento-forma-inner" />
      <div className="div">1</div>
      <div className="rectangle-div" />
      <div className="forma-de-pagamento1">Forma de pagamento</div>
      <div className="ellipse-div" />
      <div className="div1">2</div>
      <div className="pagamento-forma-child1" />
      <div className="pagamento-forma-child2" />
      <div className="pagamento-forma-child3" />
      <div className="confira-seu-pedido">Confira seu pedido</div>
      <div className="pagamento-forma-child4" />
      <div className="div2">3</div>
      <div className="pagamento-forma-child5" />
      <div className="status-do-pedido">Status do pedido</div>
      <div className="pagamento-forma-child6" />
      <div className="div3">4</div>
      <div className="group-div">
        <div className="group-parent">
          <div className="pix-parent">
            <div className="pix">Pix</div>
            <div className="aprovao-imediata">Aprovação imediata</div>
          </div>
          <img className="image-15-icon" alt="" src="/image-15@2x.png" />
        </div>
      </div>
      <div className="pagamento-forma-inner1">
        <div className="subtotal-parent">
          <div className="subtotal">Subtotal</div>
          <div className="r-4990">R$ 49,90</div>
          <div className="r-149">R$ 1,49</div>
          <div className="r-524">R$ 5,24</div>
          <div className="taxa-de-servio">Taxa de serviço</div>
          <b className="descontos">Descontos</b>
          <div className="r-4615">R$ 46,15</div>
          <b className="total">Total</b>
          <div className="digite-um-cupom">Digite um cupom de desconto</div>
          <b className="voltar">Voltar</b>
        </div>
      </div>
      <div className="rectangle-group" onClick={onGroupContainer7Click}>
        <div className="group-item" />
        <b className="avanar">Avançar</b>
      </div>
      <div className="pagamento-forma-inner2">
        <div className="ellipse-parent">
          <FormControlLabel
            className="frame-child"
            label=""
            control={<Radio color="warning" size="medium" />}
          />
          <FormControlLabel
            className="frame-item"
            label=""
            control={<Radio color="warning" size="medium" />}
          />
          <FormControlLabel
            className="frame-inner"
            label=""
            control={<Radio color="warning" size="medium" />}
          />
          <FormControlLabel
            className="ellipse-formcontrollabel"
            label=""
            control={<Radio color="warning" checked size="medium" />}
          />
        </div>
      </div>
      <div className="group-container">
        <div className="dinheiro-parent">
          <div className="dinheiro">Dinheiro</div>
          <div className="fcil-e-rpido">Fácil e rápido</div>
        </div>
        <img className="meu-projeto-1" alt="" src="/meu-projeto-1@2x.png" />
      </div>
      <div className="group-parent1">
        <div className="group-wrapper">
          <div className="carto-de-dbito-parent">
            <div className="carto-de-dbito">Cartão de Débito</div>
            <div className="compra-segura">Compra segura</div>
          </div>
        </div>
        <img
          className="magnetic-card-icon"
          alt=""
          src="/magnetic-card@2x.png"
        />
      </div>
      <div className="carto-de-crdito-parent">
        <div className="carto-de-crdito">Cartão de Crédito</div>
        <div className="compra-segura1">Compra segura</div>
        <img
          className="magnetic-card-icon"
          alt=""
          src="/magnetic-card1@2x.png"
        />
      </div>
      <div className="pagamento-forma-child7" />
      <img className="group-icon" alt="" src="/group-471.svg" />
      <div className="pagamento-forma-child8" />
      <div className="resgatar-fidelidade">Resgatar fidelidade</div>
      <img className="group-icon1" alt="" src="/group.svg" />
    </div>
  );
};

export default PagamentoForma;
