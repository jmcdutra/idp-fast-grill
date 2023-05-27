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
      <div className="fluentbox-24-filled1" />
      <div className="footer1" />
      <div className="rectangle-parent2">
        <div className="group-child5" />
        <img
          className="vecteezy-restaurant-logo-food-icon2"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced2.svg"
        />
        <b className="fast-grill-1">FAST GRILL - IDP</b>
        <div className="todos-os-direitos1">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header1">
        <div className="header-inner" />
        <div className="home1" onClick={onHomeTextClick}>
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
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced3.svg"
        />
        <img className="vector-icon8" alt="" src="/vector.svg" />
      </div>
      <div className="pagamento-status-child" />
      <div className="solarstar-bold-duotone-container">
        <div className="solarstar-bold-duotone1" />
      </div>
      <div className="seus-dados1">Seus dados</div>
      <div className="pagamento-status-item" />
      <div className="confira-seu-pedido2">Confira seu pedido</div>
      <div className="estamos-preparando-seu1">
        Estamos preparando seu pedido
      </div>
      <div className="status">Status:</div>
      <b className="pedido-aguardando-aprovao">Pedido aguardando aprovação</b>
      <div className="aguardando-aprovao1">
        <p className="aguardando2">Aguardando</p>
        <p className="aguardando2">Aprovação</p>
      </div>
      <div className="identifique-se1">Identifique-se</div>
      <div className="pagamento-status-inner" />
      <div className="div6">1</div>
      <div className="pagamento-status-child1" />
      <div className="forma-de-pagamento2">Forma de pagamento</div>
      <div className="pagamento-status-child2" />
      <div className="div7">2</div>
      <div className="pagamento-status-child3" />
      <div className="confira-seu-pedido3">Confira seu pedido</div>
      <div className="pagamento-status-child4" />
      <div className="div8">3</div>
      <div className="rectangle-parent3">
        <div className="group-child6" />
        <div className="forma-de-pagamento3">Forma de pagamento</div>
        <div className="group-child7" />
        <div className="div9">2</div>
      </div>
      <div className="pagamento-status-child5" />
      <div className="status-do-pedido2">Status do pedido</div>
      <div className="pagamento-status-child6" />
      <div className="div10">4</div>
      <div className="rectangle-parent4">
        <div className="group-child8" />
        <div className="forma-de-pagamento3">Status do pedido</div>
        <div className="group-child9" />
        <div className="div11">4</div>
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
      <div className="pagamento-status-child10" />
      <b className="b3">1</b>
      <div className="pagamento-status-child11" />
      <img className="mask-group-icon1" alt="" src="/mask-group.svg" />
      <div className="preparando-seu-pedido-container1">
        <p className="aguardando2">Preparando seu</p>
        <p className="aguardando2">Pedido</p>
      </div>
      <div className="pagamento-status-child12" />
      <b className="b4">2</b>
      <img className="vector-icon9" alt="" src="/vector6.svg" />
      <div className="rectangle-parent5">
        <div className="group-child10" />
        <div className="aguardando-retirada1">
          <p className="aguardando2">Aguardando</p>
          <p className="aguardando2">Retirada</p>
        </div>
        <div className="group-child11" />
        <b className="b5">3</b>
        <img className="vector-icon10" alt="" src="/vector2.svg" />
      </div>
      <div className="pagamento-status-child13" />
      <img className="vector-icon11" alt="" src="/vector3.svg" />
      <div className="novos-pedidos1">Novos pedidos</div>
      <div className="acumule-pontos-e1">
        Acumule pontos e resgate desconto de fidelidade
      </div>
      <div className="pagamento-status-child14" />
      <img className="vector-icon12" alt="" src="/vector3.svg" />
      <div className="pedidos-acumulativos1">{`Pedidos acumulativos `}</div>
      <div className="entre-em-contato1">Entre em contato com a gente</div>
      <div className="resgate-a-fidelidade-container1">
        <span>{`Resgate a fidelidade com `}</span>
        <b>R$ 200,00</b>
        <span> em compras acumulativas</span>
      </div>
      <div className="pagamento-status-child15" />
      <div className="pagamento-status-child16" />
      <div className="pagamento-status-child17" />
      <img className="vector-icon13" alt="" src="/vector3.svg" />
      <img className="vector-icon14" alt="" src="/vector4.svg" />
      <img className="vector-icon15" alt="" src="/vector5.svg" />
    </div>
  );
};

export default PagamentoStatus;
