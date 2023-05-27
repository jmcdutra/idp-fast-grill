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

  const onGroupContainer6Click = useCallback(() => {
    navigate("/pagamentostatus3");
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
      <div className="fluentbox-24-filled3" />
      <div className="footer3" />
      <div className="rectangle-parent10">
        <div className="group-child17" />
        <img
          className="vecteezy-restaurant-logo-food-icon6"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced.svg"
        />
        <b className="fast-grill-3">FAST GRILL - IDP</b>
        <div className="todos-os-direitos3">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header3">
        <div className="header-child4" />
        <div className="home4" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="cardpio3" onClick={onCardpioTextClick}>
          Cardápio
        </div>
        <div className="header-child5" />
        <div className="rea-do-cliente3">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon7"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced4.svg"
        />
        <img className="vector-icon7" alt="" src="/vector.svg" />
      </div>
      <div className="pagamento-status2-child" />
      <div className="solarstar-bold-duotone-wrapper1">
        <div className="solarstar-bold-duotone3" />
      </div>
      <div className="seus-dados2">Seus dados</div>
      <div className="pagamento-status2-item" />
      <div className="confira-seu-pedido5">Confira seu pedido</div>
      <div className="estamos-preparando-seu2">
        Estamos preparando seu pedido
      </div>
      <div className="previso-de-retirada1">Previsão de retirada:</div>
      <div className="hrs">09:50 - 10:00 hrs</div>
      <div className="identifique-se3">Identifique-se</div>
      <div className="pagamento-status2-inner" />
      <div className="div16">1</div>
      <div className="pagamento-status2-child1" />
      <div className="forma-de-pagamento6">Forma de pagamento</div>
      <div className="pagamento-status2-child2" />
      <div className="div17">2</div>
      <div className="pagamento-status2-child3" />
      <div className="confira-seu-pedido6">Confira seu pedido</div>
      <div className="pagamento-status2-child4" />
      <div className="div18">3</div>
      <div className="rectangle-parent11">
        <div className="group-child18" />
        <div className="forma-de-pagamento7">Forma de pagamento</div>
        <div className="group-child19" />
        <div className="div19">2</div>
      </div>
      <div className="pagamento-status2-child5" />
      <div className="status-do-pedido5">Status do pedido</div>
      <div className="pagamento-status2-child6" />
      <div className="div20">4</div>
      <div className="rectangle-parent12">
        <div className="group-child20" />
        <div className="forma-de-pagamento7">Status do pedido</div>
        <div className="group-child21" />
        <div className="div21">4</div>
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
      <div className="aguardando-aprovao-container">
        <div className="aguardando-aprovao2">
          <p className="aguardando4">Aguardando</p>
          <p className="aguardando4">Aprovação</p>
        </div>
        <div className="frame-child6" />
        <b className="b6">1</b>
        <div className="frame-child7" />
        <img className="mask-group-icon2" alt="" src="/mask-group.svg" />
        <div className="preparando-seu-pedido-container2">
          <p className="aguardando4">Preparando seu</p>
          <p className="aguardando4">Pedido</p>
        </div>
        <div className="frame-child8" />
        <b className="b7">2</b>
        <img className="vector-icon8" alt="" src="/vector1.svg" />
        <div className="rectangle-parent13">
          <div className="group-child22" />
          <div
            className="aguardando-retirada-parent"
            onClick={onGroupContainer6Click}
          >
            <div className="aguardando-aprovao2">
              <p className="aguardando4">Aguardando</p>
              <p className="aguardando4">Retirada</p>
            </div>
            <div className="frame-child6" />
            <b className="b6">3</b>
            <img className="vector-icon9" alt="" src="/vector2.svg" />
          </div>
        </div>
      </div>
      <div className="novos-pedidos2">Novos pedidos</div>
      <div className="acumule-pontos-e2">
        Acumule pontos e resgate desconto de fidelidade
      </div>
      <div className="pedidos-acumulativos2">{`Pedidos acumulativos `}</div>
      <div className="entre-em-contato2">Entre em contato com a gente</div>
      <div className="resgate-a-fidelidade-container2">
        <span>{`Resgate a fidelidade com `}</span>
        <b>R$ 200,00</b>
        <span> em compras acumulativas</span>
      </div>
      <img className="pagamento-status2-child10" alt="" src="/frame-53.svg" />
      <img className="pagamento-status2-child11" alt="" src="/frame-52.svg" />
    </div>
  );
};

export default PagamentoStatus2;
