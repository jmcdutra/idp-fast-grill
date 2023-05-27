import { useCallback } from "react";
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

  const onGroupContainer8Click = useCallback(() => {
    navigate("/pagamentoconferir");
  }, [navigate]);

  return (
    <div className="pagamento-forma">
      <div className="fluentbox-24-filled4" />
      <div className="footer4" />
      <div className="rectangle-parent15">
        <div className="group-child26" />
        <img
          className="vecteezy-restaurant-logo-food-icon8"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced2.svg"
        />
        <b className="fast-grill-4">FAST GRILL - IDP</b>
        <div className="todos-os-direitos4">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header4">
        <div className="header-child6" />
        <div className="home4" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="cardpio4" onClick={onCardpioTextClick}>
          Cardápio
        </div>
        <div className="header-child7" />
        <div className="rea-do-cliente4">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon9"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced4.svg"
        />
        <img className="vector-icon32" alt="" src="/vector7.svg" />
      </div>
      <div className="pagamento-forma-child" />
      <div className="solarstar-bold-duotone-wrapper2">
        <div className="solarstar-bold-duotone4" />
      </div>
      <div className="pagamento-forma-item" />
      <div className="forma-de-pagamento8">Forma de pagamento</div>
      <div className="selecione-o-mtodo">Selecione o método de pagamento</div>
      <div className="identifique-se4">Identifique-se</div>
      <div className="pagamento-forma-inner" />
      <div className="div24">1</div>
      <div className="pagamento-forma-child1" />
      <div className="forma-de-pagamento9">Forma de pagamento</div>
      <div className="pagamento-forma-child2" />
      <div className="div25">2</div>
      <div className="pagamento-forma-child3" />
      <div className="pagamento-forma-child4" />
      <div className="pagamento-forma-child5" />
      <div className="confira-seu-pedido9">Confira seu pedido</div>
      <div className="pagamento-forma-child6" />
      <div className="div26">3</div>
      <div className="pagamento-forma-child7" />
      <div className="status-do-pedido7">Status do pedido</div>
      <div className="pagamento-forma-child8" />
      <div className="div27">4</div>
      <div className="group-parent">
        <div className="pix-parent">
          <div className="pix">Pix</div>
          <div className="aprovao-imediata">Aprovação imediata</div>
        </div>
        <img className="image-15-icon" alt="" src="/image-15@2x.png" />
        <div className="group-child27" />
        <div className="group-child28" />
      </div>
      <div className="group-container">
        <div className="carto-de-dbito-parent">
          <div className="pix">Cartão de Débito</div>
          <div className="aprovao-imediata">Compra segura</div>
        </div>
        <div className="group-child27" />
      </div>
      <div className="group-parent1">
        <div className="carto-de-crdito-parent">
          <div className="carto-de-crdito">Cartão de Crédito</div>
          <div className="compra-segura1">Compra segura</div>
          <div className="subtotal1">Subtotal</div>
          <div className="r-49901">R$ 49,90</div>
          <div className="r-1491">R$ 1,49</div>
          <div className="r-5241">R$ 5,24</div>
          <div className="taxa-de-servio1">Taxa de serviço</div>
          <b className="descontos1">Descontos</b>
          <div className="r-46151">R$ 46,15</div>
          <b className="total1">Total</b>
          <div className="digite-um-cupom1">Digite um cupom de desconto</div>
          <b className="voltar1">Voltar</b>
        </div>
        <div className="group-child27" />
      </div>
      <div className="rectangle-parent16" onClick={onGroupContainer8Click}>
        <div className="group-child31" />
        <b className="avanar">Avançar</b>
      </div>
      <div className="group-parent2">
        <div className="dinheiro-parent">
          <div className="pix">Dinheiro</div>
          <div className="aprovao-imediata">Fácil e rápido</div>
        </div>
        <div className="group-child27" />
      </div>
      <img className="meu-projeto-1" alt="" src="/meu-projeto-1@2x.png" />
      <img className="magnetic-card-icon" alt="" src="/magnetic-card@2x.png" />
      <img
        className="magnetic-card-icon1"
        alt=""
        src="/magnetic-card1@2x.png"
      />
      <div className="pagamento-forma-child9" />
      <img className="pagamento-forma-child10" alt="" src="/group-471.svg" />
      <div className="pagamento-forma-child11" />
      <div className="resgatar-fidelidade1">Resgatar fidelidade</div>
      <img className="group-icon2" alt="" src="/group.svg" />
    </div>
  );
};

export default PagamentoForma;
