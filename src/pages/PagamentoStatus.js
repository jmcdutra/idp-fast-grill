import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PagamentoStatus.css";
const PagamentoStatus = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/pagamentostatus2");
  }, [navigate]);

  return (
    <div className="pagamento-status">
      <div className="riwhatsapp-fill1" />
      <div className="material-symbolscall1" />
      <div className="mdifood1" />
      <div className="icon-park-solidtimer1" />
      <div className="galaremove1" />
      <div className="heroiconspencil-solid1" />
      <div className="material-symbolsstore1" />
      <div className="mdicalendar1" />
      <div className="fluentbox-24-filled2" />
      <div className="footer2" />
      <div className="rectangle-parent6">
        <div className="group-child9" />
        <img
          className="vecteezy-restaurant-logo-food-icon4"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced2.svg"
        />
        <b className="fast-grill-2">FAST GRILL - IDP</b>
        <div className="todos-os-direitos2">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header2">
        <div className="header-child2" />
        <div className="home3" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="cardpio2" onClick={onCardpioTextClick}>
          Cardápio
        </div>
        <div className="header-child3" />
        <div className="rea-do-cliente2">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon5"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced3.svg"
        />
        <img className="vector-icon4" alt="" src="/vector.svg" />
      </div>
      <div className="pagamento-status-child" />
      <div className="solarstar-bold-duotone-frame">
        <div className="solarstar-bold-duotone2" />
      </div>
      <div className="seus-dados1">Seus dados</div>
      <div className="pagamento-status-item" />
      <div className="confira-seu-pedido3">Confira seu pedido</div>
      <div className="estamos-preparando-seu1">
        Estamos preparando seu pedido
      </div>
      <div className="status">Status:</div>
      <b className="pedido-aguardando-aprovao">Pedido aguardando aprovação</b>
      <div className="identifique-se2">Identifique-se</div>
      <div className="pagamento-status-inner" />
      <div className="div10">1</div>
      <div className="pagamento-status-child1" />
      <div className="forma-de-pagamento4">Forma de pagamento</div>
      <div className="pagamento-status-child2" />
      <div className="div11">2</div>
      <div className="pagamento-status-child3" />
      <div className="confira-seu-pedido4">Confira seu pedido</div>
      <div className="pagamento-status-child4" />
      <div className="div12">3</div>
      <div className="rectangle-parent7">
        <div className="group-child10" />
        <div className="forma-de-pagamento5">Forma de pagamento</div>
        <div className="group-child11" />
        <div className="div13">2</div>
      </div>
      <div className="pagamento-status-child5" />
      <div className="status-do-pedido3">Status do pedido</div>
      <div className="pagamento-status-child6" />
      <div className="div14">4</div>
      <div className="rectangle-parent8">
        <div className="group-child12" />
        <div className="forma-de-pagamento5">Status do pedido</div>
        <div className="group-child13" />
        <div className="div15">4</div>
      </div>
      <div className="pagamento-status-inner1">
        <div className="pedido-3342562-wrapper">
          <div className="pedido-3342562">Pedido #3342562</div>
        </div>
      </div>
      <div className="pagamento-status-child7" />
      <div className="programa-de-fidelidade1">Programa de Fidelidade</div>
      <div className="cupons-de-desconto1">Cupons de desconto</div>
      <div className="ganhe-cupons-de-container1">
        <span>{`Ganhe cupons de desconto em compras acima de `}</span>
        <b>R$ 59,00</b>
      </div>
      <div className="pagamento-status-child8" />
      <div className="precisa-de-ajuda1">Precisa de ajuda?</div>
      <div className="pagamento-status-child9" />
      <div className="aguardando-aprovao-group">
        <div className="aguardando-aprovao1">
          <p className="aguardando2">Aguardando</p>
          <p className="aguardando2">Aprovação</p>
        </div>
        <div className="frame-child4" />
        <b className="b3">1</b>
        <div className="frame-child5" />
        <img className="mask-group-icon1" alt="" src="/mask-group.svg" />
        <div
          className="preparando-seu-pedido-parent"
          onClick={onGroupContainer6Click}
        >
          <div className="preparando-seu-pedido-container1">
            <p className="aguardando2">Preparando seu</p>
            <p className="aguardando2">Pedido</p>
          </div>
          <div className="group-child14" />
          <b className="b4">2</b>
          <img className="vector-icon5" alt="" src="/vector6.svg" />
        </div>
        <div className="rectangle-parent9">
          <div className="group-child15" />
          <div className="aguardando-retirada1">
            <p className="aguardando2">Aguardando</p>
            <p className="aguardando2">Retirada</p>
          </div>
          <div className="group-child16" />
          <b className="b5">3</b>
          <img className="vector-icon6" alt="" src="/vector2.svg" />
        </div>
      </div>
      <div className="novos-pedidos1">Novos pedidos</div>
      <div className="acumule-pontos-e1">
        Acumule pontos e resgate desconto de fidelidade
      </div>
      <div className="pedidos-acumulativos1">{`Pedidos acumulativos `}</div>
      <div className="entre-em-contato1">Entre em contato com a gente</div>
      <div className="resgate-a-fidelidade-container1">
        <span>{`Resgate a fidelidade com `}</span>
        <b>R$ 200,00</b>
        <span> em compras acumulativas</span>
      </div>
      <img className="pagamento-status-child10" alt="" src="/frame-53.svg" />
      <img className="pagamento-status-child11" alt="" src="/frame-52.svg" />
    </div>
  );
};

export default PagamentoStatus;
