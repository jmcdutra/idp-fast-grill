import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PagamentoConferir.css";
const PagamentoConferir = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onCardpioTextClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/pagamentoforma");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/pagamentostatus");
  }, [navigate]);

  return (
    <div className="pagamento-conferir">
      <div className="galaremove3" />
      <div className="heroiconspencil-solid3" />
      <div className="material-symbolsstore3" />
      <div className="mdicalendar3" />
      <div className="fluentbox-24-filled3" />
      <div className="footer3" />
      <div className="rectangle-parent10">
        <div className="group-child19" />
        <img
          className="vecteezy-restaurant-logo-food-icon6"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced5.svg"
        />
        <b className="fast-grill-3">FAST GRILL - IDP</b>
        <div className="todos-os-direitos3">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header3">
        <img
          className="heroiconspencil-solid4"
          alt=""
          src="/heroiconspencilsolid.svg"
        />
        <div className="header-child4" />
        <div className="home3" onClick={onHomeTextClick}>
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
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced6.svg"
        />
        <img className="vector-icon24" alt="" src="/vector7.svg" />
      </div>
      <div className="pagamento-conferir-child" />
      <div className="solarstar-bold-duotone-wrapper1">
        <div className="solarstar-bold-duotone3" />
      </div>
      <div className="seus-dados3">Seus dados</div>
      <div className="pagamento-conferir-item" />
      <div className="confira-seu-pedido6">Confira seu pedido</div>
      <div className="retirar-em-13">{`Retirar em 13 minutos `}</div>
      <div className="detalhes-do-pedido">Detalhes do pedido</div>
      <div className="observaes-sobre-o">Observações sobre o seu pedido</div>
      <div className="identifique-se3">Identifique-se</div>
      <div className="pagamento-conferir-inner" />
      <div className="div18">1</div>
      <div className="pagamento-conferir-child1" />
      <div className="forma-de-pagamento6">Forma de pagamento</div>
      <div className="pagamento-conferir-child2" />
      <div className="div19">2</div>
      <div className="pagamento-conferir-child3" />
      <div className="pagamento-conferir-child4" />
      <div className="pagamento-conferir-child5" />
      <div className="confira-seu-pedido7">Confira seu pedido</div>
      <div className="pagamento-conferir-child6" />
      <div className="div20">3</div>
      <div className="rectangle-parent11">
        <div className="group-child20" />
        <div className="forma-de-pagamento7">Forma de pagamento</div>
        <div className="group-child21" />
        <div className="div21">2</div>
      </div>
      <div className="rectangle-parent12">
        <div className="group-child22" />
        <div className="forma-de-pagamento7">Confira seu pedido</div>
        <div className="group-child23" />
        <div className="div22">3</div>
      </div>
      <div className="pagamento-conferir-child7" />
      <div className="status-do-pedido6">Status do pedido</div>
      <div className="pagamento-conferir-child8" />
      <div className="div23">4</div>
      <div className="pagamento-conferir-inner1">
        <div className="subtotal-parent">
          <div className="subtotal">Subtotal</div>
          <div className="voc-retira-em">Você retira em:</div>
          <div className="x-fil-container">
            <p className="x-fil">1x - Filé de Frango</p>
            <ul className="feijo-preto-ao-ponto-poro-d">
              <li className="feijo-preto">
                <span>Feijão Preto</span>
              </li>
              <li className="feijo-preto">
                <span>Ao Ponto</span>
              </li>
              <li>
                <span>Porção de Mandioca</span>
              </li>
            </ul>
          </div>
          <div className="digite-aqui-as">
            Digite aqui as observações que nós iremos tomar conta do seu pedido!
          </div>
          <div className="r-1990">R$ 19,90</div>
          <b className="idp-asa">IDP - Asa Norte</b>
          <b className="adicionar-mais-itens">Adicionar mais itens</b>
          <div className="r-4990">R$ 49,90</div>
          <div className="r-149">R$ 1,49</div>
          <div className="r-524">R$ 5,24</div>
          <div className="taxa-de-servio">Taxa de serviço</div>
          <b className="descontos">Descontos</b>
          <div className="r-4615">R$ 46,15</div>
          <b className="total">Total</b>
          <div className="digite-um-cupom">Digite um cupom de desconto</div>
          <div className="rectangle-parent13" onClick={onGroupContainer4Click}>
            <div className="group-child24" />
            <b className="voltar">Voltar</b>
          </div>
        </div>
      </div>
      <div className="rectangle-parent14" onClick={onGroupContainer7Click}>
        <div className="group-child25" />
        <b className="voltar">Fechar pedido</b>
      </div>
      <div className="pagamento-conferir-inner2">
        <div className="agendar-retirada-parent">
          <div className="agendar-retirada">Agendar Retirada</div>
          <div className="alterar-unidade">Alterar Unidade</div>
        </div>
      </div>
      <div className="pagamento-conferir-child9" />
      <div className="pagamento-conferir-child10" />
      <div className="pagamento-conferir-child11" />
      <div className="pagamento-conferir-child9" />
      <div className="pagamento-conferir-child13" />
      <div className="pagamento-conferir-child14" />
      <div className="pagamento-conferir-child15" />
      <img className="group-icon" alt="" src="/group-47.svg" />
      <div className="pagamento-conferir-child16" />
      <div className="resgatar-fidelidade">Resgatar fidelidade</div>
      <img className="group-icon1" alt="" src="/group.svg" />
      <img className="vector-icon25" alt="" src="/vector8.svg" />
      <img className="vector-icon26" alt="" src="/vector9.svg" />
      <img className="pagamento-conferir-child17" alt="" src="/group-51.svg" />
      <img className="vector-icon27" alt="" src="/vector10.svg" />
      <div className="x-salada">1x - Salada de Frutas</div>
      <img className="vector-icon28" alt="" src="/vector10.svg" />
      <img className="pagamento-conferir-child18" alt="" src="/group-52.svg" />
      <div className="r-990">R$ 9,90</div>
      <img className="pagamento-conferir-child19" alt="" src="/group-52.svg" />
      <div className="x-salada1">1x - Salada de Frutas</div>
      <img className="vector-icon29" alt="" src="/vector10.svg" />
      <div className="r-9901">R$ 9,90</div>
      <img className="pagamento-conferir-child20" alt="" src="/group-52.svg" />
      <div className="x-salada2">1x - Salada de Frutas</div>
      <img className="vector-icon30" alt="" src="/vector10.svg" />
      <img className="vector-icon31" alt="" src="/vector10.svg" />
      <div className="r-9902">R$ 9,90</div>
      <img className="pagamento-conferir-child21" alt="" src="/group-52.svg" />
    </div>
  );
};

export default PagamentoConferir;
