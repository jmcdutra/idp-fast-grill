import { useCallback } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
const Modal = () => {
  const navigate = useNavigate();

  const onGroupContainer32Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="modal">
      <div className="fluentbox-24-filled-parent">
        <div className="fluentbox-24-filled6" />
        <div className="footer6" />
        <div className="group-child36" />
        <div className="image-14-parent">
          <img className="image-14-icon" alt="" src="/image-14@2x.png" />
          <img className="image-14-icon" alt="" src="/image-151@2x.png" />
        </div>
        <img
          className="vecteezy-restaurant-logo-food-icon13"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-2@2x.png"
        />
        <div className="header5">
          <div className="header-child8" />
          <div className="home6">Home</div>
          <b className="cardpio5">Cardápio</b>
          <div className="header-child9" />
          <div className="rea-do-cliente5">Área do Cliente</div>
          <img
            className="vecteezy-restaurant-logo-food-icon14"
            alt=""
            src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced7.svg"
          />
          <img className="vector-icon18" alt="" src="/vector14.svg" />
        </div>
        <div className="group-child37" />
        <b className="fastgrill-idp2">FastGrill - IDP Asa Norte</b>
        <div className="sgan-609-mdulo1">
          SGAN 609 Módulo A - Asa Norte, Brasília - DF, 70830-401
        </div>
        <div className="pedidos-na-sua-container">
          <span>{`Pedidos na sua frente: `}</span>
          <b>#0004</b>
        </div>
        <div className="tempo-mdio-de-container">
          <span>{`Tempo médio de espera: `}</span>
          <b>12 minutos</b>
        </div>
        <b className="aberto-at-as1">Aberto até as 18:00hrs</b>
        <div className="group-child38" />
        <div className="group-parent2">
          <div className="rectangle-parent20">
            <div className="group-child39" />
            <div className="ver-outras-unidades">Ver outras unidades</div>
          </div>
          <img className="vector-icon19" alt="" src="/vector15.svg" />
        </div>
        <div className="group-frame">
          <div className="categorias-parent">
            <div className="categorias-parent">
              <b className="categorias">CATEGORIAS</b>
              <div className="sucos-tapioca">{`Sucos    |    Tapioca Salgada    |    Tapioca Doce |    Cuscuz    |     Crepe Salgado     |     Crepe Doce     |      Omelete      |     Pratos Executivos    `}</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent21">
          <div className="group-child40" />
          <img className="image-11-icon" alt="" src="/image-11@2x.png" />
          <div className="peito-de-frango">Peito de Frango</div>
          <b className="pratos-executivos">PRATOS EXECUTIVOS</b>
          <div className="esse-t-no">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="group-child41" />
          <div className="adicionar-ao-carrinho">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
          <div className="rectangle-parent22">
            <div className="group-child42" />
            <img className="image-12-icon" alt="" src="/image-125@2x.png" />
            <div className="peito-de-frango1">Peito de Frango</div>
            <div className="esse-t-no1">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="group-child43" />
            <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container2">
              <span className="a-partir-de-container1">
                <span>A partir de</span>
                <span className="span">{` `}</span>
                <span className="r-19901">R$ 19,90</span>
              </span>
            </div>
          </div>
          <div className="group-child44" />
          <img className="image-11-icon1" alt="" src="/image-11@2x.png" />
          <div className="peito-de-frango2">Peito de Frango</div>
          <div className="esse-t-no2">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="group-child45" />
          <div className="adicionar-ao-carrinho2">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container4">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
          <div className="rectangle-parent23">
            <div className="group-child42" />
            <img className="image-12-icon1" alt="" src="/image-125@2x.png" />
            <div className="peito-de-frango1">Peito de Frango</div>
            <div className="esse-t-no1">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="group-child43" />
            <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container6">
              <span className="a-partir-de-container1">
                <span>A partir de</span>
                <span className="span">{` `}</span>
                <span className="r-19901">R$ 19,90</span>
              </span>
            </div>
          </div>
          <div className="rectangle-parent24">
            <div className="group-child42" />
            <img className="image-12-icon" alt="" src="/image-121@2x.png" />
            <div className="peito-de-frango1">Peito de Frango</div>
            <div className="esse-t-no1">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="group-child43" />
            <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container2">
              <span className="a-partir-de-container1">
                <span>A partir de</span>
                <span className="span">{` `}</span>
                <span className="r-19901">R$ 19,90</span>
              </span>
            </div>
          </div>
        </div>
        <img className="vector-icon20" alt="" src="/vector3.svg" />
        <img className="vector-icon21" alt="" src="/vector17.svg" />
        <div className="solarstar-bold-duotone-parent">
          <div className="solarstar-bold-duotone6" />
          <img className="group-icon3" alt="" src="/group2.svg" />
          <div className="os-pratos-que">
            Os pratos que estão fazendo sucesso entre nossos clientes hoje.
          </div>
          <div className="recomendaes-dirias-parent">
            <b className="recomendaes-dirias">Recomendações Diárias</b>
            <div className="rectangle-parent25">
              <div className="group-child50" />
              <img className="image-12-icon" alt="" src="/image-11@2x.png" />
              <div className="peito-de-frango1">Peito de Frango</div>
              <div className="esse-t-no5">
                Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
                deixar de pedir esse clássico né? Um irresistível filé de peito
                de frango grelhado e com aquele acompanhamento caprichado.
              </div>
              <div className="group-child51" />
              <div className="adicionar-ao-carrinho5">
                Adicionar ao Carrinho
              </div>
              <div className="a-partir-de-container10">
                <span className="a-partir-de-container1">
                  <span>A partir de</span>
                  <span className="span">{` `}</span>
                  <span className="r-19906">R$ 19,90</span>
                </span>
              </div>
            </div>
            <div className="rectangle-parent26">
              <div className="group-child50" />
              <img className="image-12-icon" alt="" src="/image-125@2x.png" />
              <div className="peito-de-frango1">Peito de Frango</div>
              <div className="esse-t-no5">
                Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
                deixar de pedir esse clássico né? Um irresistível filé de peito
                de frango grelhado e com aquele acompanhamento caprichado.
              </div>
              <div className="group-child51" />
              <div className="adicionar-ao-carrinho5">
                Adicionar ao Carrinho
              </div>
              <div className="a-partir-de-container10">
                <span className="a-partir-de-container1">
                  <span>A partir de</span>
                  <span className="span">{` `}</span>
                  <span className="r-19906">R$ 19,90</span>
                </span>
              </div>
            </div>
            <div className="rectangle-parent27">
              <div className="group-child50" />
              <img className="image-12-icon" alt="" src="/image-121@2x.png" />
              <div className="peito-de-frango1">Peito de Frango</div>
              <div className="esse-t-no5">
                Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
                deixar de pedir esse clássico né? Um irresistível filé de peito
                de frango grelhado e com aquele acompanhamento caprichado.
              </div>
              <div className="group-child51" />
              <div className="adicionar-ao-carrinho5">
                Adicionar ao Carrinho
              </div>
              <div className="a-partir-de-container10">
                <span className="a-partir-de-container1">
                  <span>A partir de</span>
                  <span className="span">{` `}</span>
                  <span className="r-19906">R$ 19,90</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="group-child56" />
      </div>
      <div className="rectangle-parent28">
        <div className="group-child57" />
        <div className="group-child58" />
        <div className="group-child59" />
        <img className="image-14-icon1" alt="" src="/image-141@2x.png" />
        <div className="peito-de-frango8">Peito de Frango</div>
        <div className="esse-t-no-container">
          <p className="blank-line">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </p>
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">
            Filé de Frango acompanhado de arroz branco, feijão, farofa, batata
            frita. *Gramatura do filé de frango: 100g *Esse prato não acompanha
            molho. Caso você deseje adicionar esse complemento, você pode ir até
            a aba "Adicionais" localizada no final do cardápio e escolher o
            molho de sua preferência.
          </p>
        </div>
        <div className="adicione-um-acompanhamento-ob-parent">
          <div className="adicione-um-acompanhamento-container">
            <span className="a-partir-de-container1">
              <span className="adicione-um-acompanhamento">{`Adicione um acompanhamento `}</span>
              <span className="obrigatrio">(obrigatório)</span>
            </span>
          </div>
          <div className="feijo-preto-parent">
            <div className="feijo-preto1">Feijão Preto</div>
            <div className="feijo-preto-arroz">
              Feijão preto, arroz, farofa e batat
            </div>
            <FormControlLabel
              className="group-child60"
              label=""
              control={<Radio color="warning" checked size="medium" />}
            />
          </div>
          <div className="feijo-tropeiro-parent">
            <div className="feijo-tropeiro">Feijão Tropeiro</div>
            <div className="feijo-tropeiro-arroz">
              Feijão tropeiro, arroz, farofa e batat
            </div>
            <FormControlLabel
              className="group-child60"
              label=""
              control={<Radio color="warning" size="medium" />}
            />
          </div>
        </div>
        <div className="escolha-o-ponto-da-protena-o-parent">
          <div className="escolha-o-ponto-container">
            <span className="a-partir-de-container1">
              <span className="adicione-um-acompanhamento">{`Escolha o ponto da proteína `}</span>
              <span className="obrigatrio">(obrigatório)</span>
            </span>
          </div>
          <div className="mal-passado-parent">
            <div className="mal-passado">Mal passado</div>
            <div className="selado-por-fora">
              Selado por fora e rosado por dentro
            </div>
            <FormControlLabel
              className="group-child60"
              label=""
              control={<Radio color="warning" size="medium" />}
            />
          </div>
          <div className="ao-ponto-parent">
            <div className="ao-ponto1">Ao ponto</div>
            <div className="selado-por-fora1">
              Selado por fora e vermelho ao centro
            </div>
            <FormControlLabel
              className="group-child60"
              label=""
              control={<Radio color="warning" checked size="medium" />}
            />
          </div>
          <div className="bem-passado-parent">
            <div className="bem-passado">Bem passado</div>
            <div className="selado-por-fora2">
              Selado por fora e cinza por dentro
            </div>
            <FormControlLabel
              className="group-child60"
              label=""
              control={<Radio color="warning" size="medium" />}
            />
          </div>
        </div>
        <div className="deseja-adicionar-acompanhament-parent">
          <div className="deseja-adicionar-acompanhament-container">
            <span className="a-partir-de-container1">
              <span className="adicione-um-acompanhamento">{`Deseja adicionar acompanhamentos? `}</span>
              <span className="obrigatrio">(opcional)</span>
            </span>
          </div>
          <div className="group-wrapper2">
            <div className="poro-de-mandioca-parent">
              <div className="poro-de-mandioca">Porção de Mandioca</div>
              <div className="div28">2</div>
              <div className="r">+ 7,40 R$</div>
              <div className="group-child65" />
              <div className="div29">-</div>
              <div className="group-child66" />
              <div className="div30">+</div>
              <div className="div31">2</div>
              <div className="group-child67" />
              <div className="div32">-</div>
              <div className="group-child68" />
              <div className="div33">+</div>
            </div>
          </div>
          <div className="group-wrapper3">
            <div className="poro-de-ovo-parent">
              <div className="poro-de-ovo">Porção de Ovo</div>
              <div className="div34">0</div>
              <div className="r">+ 7,40 R$</div>
              <div className="group-child65" />
              <div className="div35">-</div>
              <div className="group-child66" />
              <div className="div36">+</div>
            </div>
          </div>
          <div className="group-wrapper4">
            <div className="poro-de-ovo-parent">
              <div className="poro-de-arroz">Porção de Arroz</div>
              <div className="div34">0</div>
              <div className="r">+ 7,40 R$</div>
              <div className="group-child65" />
              <div className="div35">-</div>
              <div className="group-child66" />
              <div className="div36">+</div>
            </div>
          </div>
          <div className="group-wrapper5">
            <div className="poro-de-ovo-parent">
              <div className="poro-de-salada">Porção de Salada</div>
              <div className="div40">1</div>
              <div className="r">+ 7,40 R$</div>
              <div className="group-child65" />
              <div className="div35">-</div>
              <div className="group-child66" />
              <div className="div36">+</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent29" onClick={onGroupContainer32Click}>
          <div className="group-child75" />
          <div className="adicionar-r">Adicionar · R$ 88,90</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
