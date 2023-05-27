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
    navigate("/");
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
      <div className="fluentbox-24-filled4" />
      <div className="footer4" />
      <div className="rectangle-parent14">
        <div className="group-child24" />
        <img
          className="vecteezy-restaurant-logo-food-icon8"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced5.svg"
        />
        <b className="fast-grill-4">FAST GRILL - IDP</b>
        <div className="todos-os-direitos4">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header4">
        <img
          className="heroiconspencil-solid4"
          alt=""
          src="/heroiconspencilsolid.svg"
        />
        <div className="header-child6" />
        <div className="home5" onClick={onHomeTextClick}>
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
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced6.svg"
        />
        <img className="vector-icon10" alt="" src="/vector7.svg" />
      </div>
      <div className="pagamento-conferir-child" />
      <div className="solarstar-bold-duotone-wrapper2">
        <div className="solarstar-bold-duotone4" />
      </div>
      <div className="seus-dados3">Seus dados</div>
      <div className="pagamento-conferir-item" />
      <div className="confira-seu-pedido7">Confira seu pedido</div>
      <div className="retirar-em-13">{`Retirar em 13 minutos `}</div>
      <div className="detalhes-do-pedido">Detalhes do pedido</div>
      <div className="observaes-sobre-o">Observações sobre o seu pedido</div>
      <div className="identifique-se4">Identifique-se</div>
      <div className="pagamento-conferir-inner" />
      <div className="div22">1</div>
      <div className="pagamento-conferir-child1" />
      <div className="forma-de-pagamento8">Forma de pagamento</div>
      <div className="pagamento-conferir-child2" />
      <div className="div23">2</div>
      <div className="pagamento-conferir-child3" />
      <div className="pagamento-conferir-child4" />
      <div className="pagamento-conferir-child5" />
      <div className="confira-seu-pedido8">Confira seu pedido</div>
      <div className="pagamento-conferir-child6" />
      <div className="div24">3</div>
      <div className="rectangle-parent15">
        <div className="group-child25" />
        <div className="forma-de-pagamento9">Forma de pagamento</div>
        <div className="group-child26" />
        <div className="div25">2</div>
      </div>
      <div className="rectangle-parent16">
        <div className="group-child27" />
        <div className="forma-de-pagamento9">Confira seu pedido</div>
        <div className="group-child28" />
        <div className="div26">3</div>
      </div>
      <div className="pagamento-conferir-child7" />
      <div className="status-do-pedido7">Status do pedido</div>
      <div className="pagamento-conferir-child8" />
      <div className="div27">4</div>
      <div className="pagamento-conferir-inner1">
        <div className="subtotal-group">
          <div className="subtotal1">Subtotal</div>
          <div className="voc-retira-em">Você retira em:</div>
          <div className="digite-aqui-as">
            Digite aqui as observações que nós iremos tomar conta do seu pedido!
          </div>
          <b className="idp-asa">IDP - Asa Norte</b>
          <b className="adicionar-mais-itens">Adicionar mais itens</b>
          <div className="r-49901">R$ 49,90</div>
          <div className="r-1491">R$ 1,49</div>
          <div className="r-5241">R$ 5,24</div>
          <div className="taxa-de-servio1">Taxa de serviço</div>
          <b className="descontos1">Descontos</b>
          <div className="r-46151">R$ 46,15</div>
          <b className="total1">Total</b>
          <div className="digite-um-cupom1">Digite um cupom de desconto</div>
          <div className="rectangle-parent17" onClick={onGroupContainer4Click}>
            <div className="group-child29" />
            <b className="fechar-pedido">Voltar</b>
          </div>
        </div>
      </div>
      <div className="rectangle-parent18" onClick={onGroupContainer7Click}>
        <div className="group-child30" />
        <b className="fechar-pedido">Fechar pedido</b>
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
      <img className="pagamento-conferir-child16" alt="" src="/group-47.svg" />
      <div className="pagamento-conferir-child17" />
      <div className="resgatar-fidelidade1">Resgatar fidelidade</div>
      <img className="group-icon2" alt="" src="/group.svg" />
      <img className="vector-icon11" alt="" src="/vector8.svg" />
      <img className="vector-icon12" alt="" src="/vector9.svg" />
      <img className="pagamento-conferir-child18" alt="" src="/group-51.svg" />
      <img className="vector-icon13" alt="" src="/vector10.svg" />
      <div className="x-fil-de-frango-feijo-pret-parent">
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
              <span>Porção de mandioca</span>
            </li>
          </ul>
        </div>
        <img className="vector-icon14" alt="" src="/vector10.svg" />
        <div className="x-salada">1x - Salada de Frutas</div>
        <img className="vector-icon15" alt="" src="/vector10.svg" />
        <div className="r-1990-parent">
          <div className="r-1990">R$ 19,90</div>
          <img className="group-child31" alt="" src="/group-52.svg" />
        </div>
        <div className="x-salada1">1x - Salada de Frutas</div>
        <img className="vector-icon16" alt="" src="/vector10.svg" />
        <div className="x-salada2">1x - Salada de Frutas</div>
        <img className="vector-icon17" alt="" src="/vector10.svg" />
        <div className="r-990-parent">
          <div className="r-1990">R$ 9,90</div>
          <img className="group-child32" alt="" src="/group-52.svg" />
          <div className="r-9901">R$ 9,90</div>
          <img className="group-child33" alt="" src="/group-52.svg" />
          <div className="r-9902">R$ 9,90</div>
          <img className="group-child34" alt="" src="/group-52.svg" />
        </div>
      </div>
    </div>
  );
};

export default PagamentoConferir;
