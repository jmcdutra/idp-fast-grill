import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PagamentoStatus2.css";
const PagamentoStatus2 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  return (
    <div className="pagamento-status2">
      <div className="riwhatsapp-fill2" />
      <div className="material-symbolscall2" />
      <div className="mdifood2" />
      <div className="icon-park-solidtimer2" />
      <div className="galaremove2" />
      <div className="heroiconspencil-solid2" />
      <div className="material-symbolsstore2" />
      <div className="mdicalendar2" />
      <div className="fluentbox-24-filled2" />
      <div className="footer2" />
      <div className="rectangle-parent6">
        <div className="group-child12" />
        <img
          className="vecteezy-restaurant-logo-food-icon4"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced.svg"
        />
        <b className="fast-grill-2">FAST GRILL - IDP</b>
        <div className="todos-os-direitos2">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header2">
        <div className="header-child2" />
        <div className="home2" onClick={onHomeTextClick}>
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
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced4.svg"
        />
        <img className="vector-icon16" alt="" src="/vector.svg" />
      </div>
      <div className="pagamento-status2-child" />
      <div className="solarstar-bold-duotone-frame">
        <div className="solarstar-bold-duotone2" />
      </div>
      <div className="seus-dados2">Seus dados</div>
      <div className="pagamento-status2-item" />
      <div className="confira-seu-pedido4">Confira seu pedido</div>
      <div className="estamos-preparando-seu2">
        Estamos preparando seu pedido
      </div>
      <div className="previso-de-retirada1">Previsão de retirada:</div>
      <div className="hrs">09:50 - 10:00 hrs</div>
      <div className="aguardando-aprovao2">
        <p className="aguardando4">Aguardando</p>
        <p className="aguardando4">Aprovação</p>
      </div>
      <div className="identifique-se2">Identifique-se</div>
      <div className="pagamento-status2-inner" />
      <div className="div12">1</div>
      <div className="pagamento-status2-child1" />
      <div className="forma-de-pagamento4">Forma de pagamento</div>
      <div className="pagamento-status2-child2" />
      <div className="div13">2</div>
      <div className="pagamento-status2-child3" />
      <div className="confira-seu-pedido5">Confira seu pedido</div>
      <div className="pagamento-status2-child4" />
      <div className="div14">3</div>
      <div className="rectangle-parent7">
        <div className="group-child13" />
        <div className="forma-de-pagamento5">Forma de pagamento</div>
        <div className="group-child14" />
        <div className="div15">2</div>
      </div>
      <div className="pagamento-status2-child5" />
      <div className="status-do-pedido4">Status do pedido</div>
      <div className="pagamento-status2-child6" />
      <div className="div16">4</div>
      <div className="rectangle-parent8">
        <div className="group-child15" />
        <div className="forma-de-pagamento5">Status do pedido</div>
        <div className="group-child16" />
        <div className="div17">4</div>
      </div>
      <div className="pagamento-status2-inner1">
        <div className="pedido-3342562-parent">
          <div className="pedido-33425621">Pedido #3342562</div>
          <div className="o-horrio-acima">
            O horário acima é aproximado e usado apenas como referência.
          </div>
        </div>
      </div>
      <div className="pagamento-status2-child7" />
      <div className="programa-de-fidelidade2">Programa de Fidelidade</div>
      <div className="cupons-de-desconto2">Cupons de desconto</div>
      <div className="ganhe-cupons-de-container2">
        <span>{`Ganhe cupons de desconto em compras acima de `}</span>
        <b>R$ 59,00</b>
      </div>
      <div className="pagamento-status2-child8" />
      <div className="precisa-de-ajuda2">Precisa de ajuda?</div>
      <div className="pagamento-status2-child9" />
      <div className="pagamento-status2-child10" />
      <b className="b6">1</b>
      <div className="pagamento-status2-child11" />
      <img className="mask-group-icon2" alt="" src="/mask-group.svg" />
      <div className="preparando-seu-pedido-container2">
        <p className="aguardando4">Preparando seu</p>
        <p className="aguardando4">Pedido</p>
      </div>
      <div className="pagamento-status2-child12" />
      <b className="b7">2</b>
      <img className="vector-icon17" alt="" src="/vector1.svg" />
      <div className="rectangle-parent9">
        <div className="group-child17" />
        <div className="aguardando-retirada2">
          <p className="aguardando4">Aguardando</p>
          <p className="aguardando4">Retirada</p>
        </div>
        <div className="group-child18" />
        <b className="b8">3</b>
        <img className="vector-icon18" alt="" src="/vector2.svg" />
      </div>
      <div className="pagamento-status2-child13" />
      <img className="vector-icon19" alt="" src="/vector3.svg" />
      <div className="novos-pedidos2">Novos pedidos</div>
      <div className="acumule-pontos-e2">
        Acumule pontos e resgate desconto de fidelidade
      </div>
      <div className="pagamento-status2-child14" />
      <img className="vector-icon20" alt="" src="/vector3.svg" />
      <div className="pedidos-acumulativos2">{`Pedidos acumulativos `}</div>
      <div className="entre-em-contato2">Entre em contato com a gente</div>
      <div className="resgate-a-fidelidade-container2">
        <span>{`Resgate a fidelidade com `}</span>
        <b>R$ 200,00</b>
        <span> em compras acumulativas</span>
      </div>
      <div className="pagamento-status2-child15" />
      <div className="pagamento-status2-child16" />
      <div className="pagamento-status2-child17" />
      <img className="vector-icon21" alt="" src="/vector3.svg" />
      <img className="vector-icon22" alt="" src="/vector4.svg" />
      <img className="vector-icon23" alt="" src="/vector5.svg" />
    </div>
  );
};

export default PagamentoStatus2;
