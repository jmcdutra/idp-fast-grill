import { useCallback } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AreaDoCliente.css";
const AreaDoCliente = () => {
  const navigate = useNavigate();

  const onDetalhesDaContaClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPedidosAtivosTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNotificaesPromocionaisTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSairTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHistricoDePedidosClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupContainer10Click = useCallback(() => {
    navigate("/pagamentostatus");
  }, [navigate]);

  return (
    <div className="area-do-cliente">
      <div className="footer8">
        <div className="footer-child" />
        <img
          className="vecteezy-restaurant-logo-food-icon18"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced2.svg"
        />
        <b className="fast-grill-6">FAST GRILL - IDP</b>
        <div className="todos-os-direitos6">
          2023 - Todos os Direitos Reservados.
        </div>
      </div>
      <div className="header7">
        <div className="header-child11" />
        <b className="home8">Home</b>
        <div className="cardpio8">Cardápio</div>
        <div className="header-child12" />
        <div className="rea-do-cliente7">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon19"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced4.svg"
        />
        <img className="vector-icon26" alt="" src="/vector7.svg" />
      </div>
      <div className="detalhes-da-conta" onClick={onDetalhesDaContaClick}>
        Detalhes da conta
      </div>
      <div className="pedidos-ativos" onClick={onPedidosAtivosTextClick}>
        Pedidos ativos
      </div>
      <div
        className="notificaes-promocionais"
        onClick={onNotificaesPromocionaisTextClick}
      >
        Notificações promocionais
      </div>
      <div className="sair" onClick={onSairTextClick}>
        Sair
      </div>
      <div className="histrico-de-pedidos" onClick={onHistricoDePedidosClick}>
        Histórico de Pedidos
      </div>
      <div className="area-do-cliente-child" />
      <div
        className="detalhes-da-conta-parent"
        data-scroll-to="frameContainer3"
      >
        <div className="detalhes-da-conta1">Detalhes da conta</div>
        <div className="rectangle-parent35">
          <div className="group-child78" />
          <div className="nome-e-sobrenome">NOME E SOBRENOME</div>
          <div className="dutra">Dutra</div>
          <div className="group-child79" />
          <div className="celular">CELULAR</div>
          <div className="div43">(61) 9 98756-4343</div>
          <div className="group-child80" />
          <div className="cpfcnpj-opcional">CPF/CNPJ (OPCIONAL)</div>
          <div className="group-child81" />
          <div className="e-mail">E-MAIL</div>
          <div className="emaildojmgmailcom">emaildojm@gmail.com</div>
          <div className="group-child82" />
        </div>
        <div className="group-wrapper6">
          <div className="salvar-alteraes-wrapper">
            <div className="group-child83" />
            <b className="salvar-alteraes">Salvar alterações</b>
          </div>
        </div>
      </div>
      <div className="programa-de-fidelidade-parent">
        <div className="programa-de-fidelidade3">Programa de Fidelidade</div>
        <div className="rectangle-wrapper">
          <div className="group-child84" />
        </div>
        <div className="pedidos-acumulativos3">{`Pedidos acumulativos `}</div>
        <div className="gaste-r-20000-container">
          <span>{`Gaste `}</span>
          <span className="r-20000">
            <b>R$ 200,00</b>
          </span>
          <span>
            <span className="r-20000">{` `}</span>
            <span>{`em compras e ganhe `}</span>
          </span>
          <b className="de-desconto">15% de desconto</b>
        </div>
        <div className="frame-child42" />
        <img className="vector-icon27" alt="" src="/vector31.svg" />
        <div className="group-wrapper7">
          <div className="rectangle-parent37">
            <div className="group-child85" />
            <b className="resgatar">Resgatar</b>
          </div>
        </div>
      </div>
      <div
        className="notificaes-promocionais-parent"
        data-scroll-to="frameContainer1"
      >
        <div className="detalhes-da-conta1">Notificações promocionais</div>
        <div className="rectangle-wrapper">
          <div className="group-child84" />
        </div>
        <div className="eventualmente-podemos-enviar-container">
          <p className="eventualmente-podemos-enviar">
            Eventualmente, podemos enviar e-mails com promoções ou avisos em
            geral. Deseja recebê-los?
          </p>
        </div>
        <FormControlLabel
          className="rectangle-formcontrollabel"
          label="Receber e-mails promocionais"
          labelPlacement="end"
          control={<Checkbox color="warning" defaultChecked size="medium" />}
        />
      </div>
      <div className="pedidos-ativos-parent" data-scroll-to="frameContainer2">
        <div className="programa-de-fidelidade3">Pedidos ativos</div>
        <div className="rectangle-parent38">
          <div className="group-child87" />
          <div className="sbado-27-de">SÁBADO, 27 DE MAIO • 09:40</div>
        </div>
        <div className="group-wrapper6">
          <div className="salvar-alteraes-wrapper">
            <b className="salvar-alteraes">Salvar alterações</b>
          </div>
        </div>
        <div className="group-wrapper9">
          <div className="group-wrapper10">
            <div
              className="rectangle-parent39"
              onClick={onGroupContainer10Click}
            >
              <div className="group-child88" />
              <b className="ver-detalhes">Ver detalhes</b>
            </div>
          </div>
        </div>
        <div className="aguardando-aprovao3">Aguardando aprovação</div>
        <div className="frame-child43" />
        <b className="b9">1</b>
        <img className="mask-group-icon3" alt="" src="/mask-group1.svg" />
        <div className="x-fil-de">1x Filé de Frango</div>
        <div className="r-49902">R$ 49,90</div>
        <div className="frame-child44" />
        <div className="frame-child45" />
        <div className="frame-child46" />
        <div className="x-coca-cola">1x Coca Cola Zero</div>
        <div className="r-590">R$ 5,90</div>
        <div className="frame-child47" />
        <b className="pagamento-na-retirada">Pagamento na retirada</b>
        <div className="dinheiro1">Dinheiro</div>
        <b className="total-6580-r">Total 65,80 R$</b>
      </div>
      <div
        className="histrico-de-pedidos-parent"
        data-scroll-to="frameContainer"
      >
        <div className="programa-de-fidelidade3">Histórico de Pedidos</div>
        <div className="rectangle-parent40">
          <div className="group-child89" />
          <div className="sbado-27-de">SÁBADO, 27 DE MAIO • 13:54</div>
        </div>
        <div className="group-wrapper6">
          <div className="salvar-alteraes-wrapper">
            <b className="salvar-alteraes">Salvar alterações</b>
          </div>
        </div>
        <b className="pedido-retirado">Pedido retirado</b>
        <div className="x-fil-de">1x Filé de Frango</div>
        <div className="r-49902">R$ 49,90</div>
        <div className="frame-child44" />
        <div className="frame-child45" />
        <div className="frame-child46" />
        <div className="x-coca-cola">1x Coca Cola Zero</div>
        <div className="r-590">R$ 5,90</div>
        <b className="pagamento-na-retirada">Pagamento na retirada</b>
        <div className="dinheiro1">Dinheiro</div>
        <b className="total-6580-r">Total 65,80 R$</b>
        <div className="rectangle-parent41">
          <div className="group-child89" />
          <div className="sbado-27-de2">SÁBADO, 27 DE MAIO • 12:12</div>
        </div>
        <div className="group-wrapper12">
          <div className="salvar-alteraes-wrapper">
            <b className="salvar-alteraes">Salvar alterações</b>
          </div>
        </div>
        <b className="pedido-cancelado">Pedido cancelado</b>
        <div className="x-fil-de2">1x Filé de Frango</div>
        <div className="r-49904">R$ 49,90</div>
        <div className="frame-child51" />
        <div className="frame-child52" />
        <div className="frame-child53" />
        <div className="x-coca-cola2">1x Coca Cola Zero</div>
        <div className="r-5902">R$ 5,90</div>
        <b className="pagamento-na-retirada2">Pagamento na retirada</b>
        <div className="dinheiro3">Dinheiro</div>
        <b className="total-6580-r2">Total 65,80 R$</b>
        <div className="rectangle-parent42">
          <div className="group-child89" />
          <div className="quinta-25-de">QUINTA, 25 DE MAIO • 12:42</div>
        </div>
        <div className="group-wrapper13">
          <div className="salvar-alteraes-wrapper">
            <b className="salvar-alteraes">Salvar alterações</b>
          </div>
        </div>
        <b className="pedido-retirado1">Pedido retirado</b>
        <div className="x-fil-de3">1x Filé de Frango</div>
        <div className="r-49905">R$ 49,90</div>
        <div className="frame-child54" />
        <div className="frame-child55" />
        <div className="frame-child56" />
        <div className="x-coca-cola3">1x Coca Cola Zero</div>
        <div className="r-5903">R$ 5,90</div>
        <b className="pagamento-na-retirada3">Pagamento na retirada</b>
        <div className="dinheiro4">Dinheiro</div>
        <b className="total-6580-r3">Total 65,80 R$</b>
      </div>
    </div>
  );
};

export default AreaDoCliente;
