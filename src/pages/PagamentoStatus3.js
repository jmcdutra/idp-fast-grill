import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PagamentoStatus3.css";
const PagamentoStatus3 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  return (
    <div className="pagamento-status3">
      <div className="riwhatsapp-fill" />
      <div className="material-symbolscall" />
      <div className="mdifood" />
      <div className="icon-park-solidtimer" />
      <div className="galaremove" />
      <div className="heroiconspencil-solid" />
      <div className="material-symbolsstore" />
      <div className="mdicalendar" />
      <div className="fluentbox-24-filled1" />
      <div className="footer1" />
      <div className="rectangle-parent2">
        <div className="group-child2" />
        <img
          className="vecteezy-restaurant-logo-food-icon2"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced.svg"
        />
        <b className="fast-grill-1">FAST GRILL - IDP</b>
        <div className="todos-os-direitos1">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header1">
        <div className="header-inner" />
        <div className="home2" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="cardpio1" onClick={onCardpioTextClick}>
          Cardápio
        </div>
        <div className="header-child1" />
        <div className="rea-do-cliente1">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon3"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced1.svg"
        />
        <img className="vector-icon1" alt="" src="/vector.svg" />
      </div>
      <div className="pagamento-status3-child" />
      <div className="solarstar-bold-duotone-container">
        <div className="solarstar-bold-duotone1" />
      </div>
      <div className="seus-dados">Seus dados</div>
      <div className="pagamento-status3-item" />
      <div className="confira-seu-pedido1">Confira seu pedido</div>
      <div className="estamos-preparando-seu">
        Estamos preparando seu pedido
      </div>
      <div className="previso-de-retirada">Previsão de retirada:</div>
      <b className="seu-pedido-est">Seu pedido está aguardando retirada.</b>
      <div className="identifique-se1">Identifique-se</div>
      <div className="pagamento-status3-inner" />
      <div className="div4">1</div>
      <div className="pagamento-status3-child1" />
      <div className="forma-de-pagamento2">Forma de pagamento</div>
      <div className="pagamento-status3-child2" />
      <div className="div5">2</div>
      <div className="pagamento-status3-child3" />
      <div className="confira-seu-pedido2">Confira seu pedido</div>
      <div className="pagamento-status3-child4" />
      <div className="div6">3</div>
      <div className="rectangle-parent3">
        <div className="group-child3" />
        <div className="forma-de-pagamento3">Forma de pagamento</div>
        <div className="group-child4" />
        <div className="div7">2</div>
      </div>
      <div className="pagamento-status3-child5" />
      <div className="status-do-pedido1">Status do pedido</div>
      <div className="pagamento-status3-child6" />
      <div className="div8">4</div>
      <div className="rectangle-parent4">
        <div className="group-child5" />
        <div className="forma-de-pagamento3">Status do pedido</div>
        <div className="group-child6" />
        <div className="div9">4</div>
      </div>
      <div className="pagamento-status3-inner1">
        <div className="pedido-80-parent">
          <div className="pedido-80">Pedido #80</div>
          <div className="informe-o-nmero-container">
            <span>{`Informe o número `}</span>
            <b>{`#80 `}</b>
            <span>na hora de retirar o seu pedido.</span>
            <b>{` `}</b>
          </div>
        </div>
      </div>
      <div className="pagamento-status3-child7" />
      <div className="programa-de-fidelidade">Programa de Fidelidade</div>
      <div className="cupons-de-desconto">Cupons de desconto</div>
      <div className="ganhe-cupons-de-container">
        <span>{`Ganhe cupons de desconto em compras acima de `}</span>
        <b>R$ 59,00</b>
      </div>
      <div className="pagamento-status3-child8" />
      <div className="precisa-de-ajuda">Precisa de ajuda?</div>
      <div className="pagamento-status3-child9" />
      <div className="aguardando-aprovao-parent">
        <div className="aguardando-aprovao">
          <p className="aguardando">Aguardando</p>
          <p className="aguardando">Aprovação</p>
        </div>
        <div className="frame-child1" />
        <b className="b">1</b>
        <div className="frame-child2" />
        <img className="mask-group-icon" alt="" src="/mask-group.svg" />
        <div className="preparando-seu-pedido-container">
          <p className="aguardando">Preparando seu</p>
          <p className="aguardando">Pedido</p>
        </div>
        <div className="frame-child3" />
        <b className="b1">2</b>
        <img className="vector-icon2" alt="" src="/vector1.svg" />
        <div className="rectangle-parent5">
          <div className="group-child7" />
          <div className="aguardando-retirada">
            <p className="aguardando">Aguardando</p>
            <p className="aguardando">Retirada</p>
          </div>
          <div className="group-child8" />
          <b className="b2">3</b>
          <img className="vector-icon3" alt="" src="/vector2.svg" />
        </div>
      </div>
      <div className="novos-pedidos">Novos pedidos</div>
      <div className="acumule-pontos-e">
        Acumule pontos e resgate desconto de fidelidade
      </div>
      <div className="pedidos-acumulativos">{`Pedidos acumulativos `}</div>
      <div className="entre-em-contato">Entre em contato com a gente</div>
      <div className="resgate-a-fidelidade-container">
        <span>{`Resgate a fidelidade com `}</span>
        <b>R$ 200,00</b>
        <span> em compras acumulativas</span>
      </div>
      <img className="frame-icon" alt="" src="/frame-53.svg" />
      <img className="pagamento-status3-child10" alt="" src="/frame-52.svg" />
    </div>
  );
};

export default PagamentoStatus3;
