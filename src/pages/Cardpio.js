import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cardpio.css";
const Cardpio = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/unidade");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/pagamentoforma");
  }, [navigate]);

  return (
    <div className="cardpio5">
      <div className="fluentbox-24-filled6" />
      <div className="footer6">
        <div className="vecteezy-restaurant-logo-food-container">
          <img
            className="vecteezy-restaurant-logo-food-icon13"
            alt=""
            src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced7.svg"
          />
          <b className="fast-grill-5">FAST GRILL - IDP</b>
          <div className="todos-os-direitos5">
            2023 - Todos os Direitos Reservados.
          </div>
        </div>
      </div>
      <div className="cardpio-child" />
      <div className="cardpio-inner">
        <div className="rectangle-parent18" onClick={onGroupContainerClick}>
          <div className="group-child34" />
          <img className="vector-icon33" alt="" src="/vector21.svg" />
          <div className="ver-outras-unidades">Ver outras unidades</div>
        </div>
      </div>
      <img
        className="vecteezy-restaurant-logo-food-icon14"
        alt=""
        src="/vecteezy-restaurantlogofoodlogo-5386195-2@2x.png"
      />
      <div className="header5">
        <div className="home5" onClick={onHomeTextClick}>
          Home
        </div>
        <b className="cardpio6">Cardápio</b>
        <div className="header-child8" />
        <div className="rea-do-cliente5">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon15"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced8.svg"
        />
        <img
          className="vector-icon34"
          alt=""
          src="/vector11.svg"
          onClick={onVectorIcon1Click}
        />
      </div>
      <div className="cardpio-item" />
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
      <div className="cardpio-child1" />
      <div className="categorias-parent">
        <b className="categorias">CATEGORIAS</b>
        <div className="sucos-tapioca">{`Sucos    |    Tapioca Salgada    |    Tapioca Doce |    Cuscuz    |     Crepe Salgado     |     Crepe Doce     |      Omelete      |     Pratos Executivos    `}</div>
      </div>
      <div className="frame-div">
        <div className="frame-inner" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango">Peito de Frango</div>
        <b className="pratos-executivos">PRATOS EXECUTIVOS</b>
        <div className="esse-t-no">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child1" />
        <div className="adicionar-ao-carrinho">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent">
          <img className="image-12-icon" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container2">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child3" />
        <img className="image-11-icon1" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango2">Peito de Frango</div>
        <div className="esse-t-no2">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child4" />
        <div className="adicionar-ao-carrinho2">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container4">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-group">
          <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container6">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-container">
          <img className="image-12-icon" alt="" src="/image-121@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
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
      <div className="rectangle-parent19">
        <div className="frame-inner" />
        <img className="image-11-icon" alt="" src="/image-111@2x.png" />
        <div className="peito-de-frango">Peito de Frango</div>
        <b className="pratos-executivos">Crepes</b>
        <div className="esse-t-no">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child1" />
        <div className="adicionar-ao-carrinho">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent">
          <img className="image-12-icon" alt="" src="/image-122@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container2">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child3" />
        <img className="image-11-icon1" alt="" src="/image-111@2x.png" />
        <div className="peito-de-frango2">Peito de Frango</div>
        <div className="esse-t-no2">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child4" />
        <div className="adicionar-ao-carrinho2">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container4">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-group">
          <img className="image-12-icon1" alt="" src="/image-122@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container6">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-container">
          <img className="image-12-icon" alt="" src="/image-123@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
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
      <div className="rectangle-parent20">
        <div className="frame-inner" />
        <img className="image-11-icon" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango">Peito de Frango</div>
        <b className="pratos-executivos">Tapioca Salgada</b>
        <div className="esse-t-no">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child1" />
        <div className="adicionar-ao-carrinho">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent">
          <img className="image-12-icon" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container2">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child3" />
        <img className="image-11-icon1" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango2">Peito de Frango</div>
        <div className="esse-t-no2">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child4" />
        <div className="adicionar-ao-carrinho2">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container4">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-group">
          <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container6">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-parent6">
          <img className="image-12-icon1" alt="" src="/image-11@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container6">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child21" />
        <img className="image-12-icon9" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango15">Peito de Frango</div>
        <div className="esse-t-no15">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child22" />
        <div className="adicionar-ao-carrinho15">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container30">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent7">
          <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container6">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-container">
          <img className="image-12-icon" alt="" src="/image-121@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container2">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="peito-de-frango-parent">
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
          <div className="adicionar-ao-carrinho1">Adicionar ao Carrinho</div>
          <img className="image-13-icon" alt="" src="/image-13@2x.png" />
          <div className="a-partir-de-container36">
            <span className="a-partir-de-container1">
              <span>A partir de</span>
              <span className="span">{` `}</span>
              <span className="r-19901">R$ 19,90</span>
            </span>
          </div>
        </div>
      </div>
      <div className="rectangle-parent21">
        <div className="frame-child26" />
        <img className="image-11-icon6" alt="" src="/image-111@2x.png" />
        <div className="peito-de-frango19">Peito de Frango</div>
        <b className="tapioca-doce">Tapioca Doce</b>
        <div className="esse-t-no19">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child27" />
        <div className="adicionar-ao-carrinho19">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container38">
          <span className="a-partir-de-container1">
            <span>A partir de</span>
            <span className="span">{` `}</span>
            <span className="r-19901">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent9">
          <img className="image-12-icon" alt="" src="/image-122@2x.png" />
          <div className="peito-de-frango1">Peito de Frango</div>
          <div className="esse-t-no1">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child2" />
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
      <img className="vector-icon35" alt="" src="/vector12.svg" />
      <img className="vector-icon36" alt="" src="/vector13.svg" />
      <div className="solarstar-bold-duotone-parent">
        <div className="solarstar-bold-duotone6" />
        <img className="group-icon3" alt="" src="/group1.svg" />
        <div className="os-pratos-que">
          Os pratos que estão fazendo sucesso entre nossos clientes hoje.
        </div>
        <div className="recomendaes-dirias-parent">
          <b className="tapioca-doce">Recomendações Diárias</b>
          <div className="image-11-parent">
            <img className="image-12-icon" alt="" src="/image-11@2x.png" />
            <div className="peito-de-frango1">Peito de Frango</div>
            <div className="esse-t-no21">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="frame-child29" />
            <div className="adicionar-ao-carrinho21">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container42">
              <span className="a-partir-de-container1">
                <span>A partir de</span>
                <span className="span">{` `}</span>
                <span className="r-199022">R$ 19,90</span>
              </span>
            </div>
          </div>
          <div className="image-12-parent10">
            <img className="image-12-icon" alt="" src="/image-124@2x.png" />
            <div className="peito-de-frango1">Peito de Frango</div>
            <div className="esse-t-no21">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="frame-child29" />
            <div className="adicionar-ao-carrinho21">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container42">
              <span className="a-partir-de-container1">
                <span>A partir de</span>
                <span className="span">{` `}</span>
                <span className="r-199022">R$ 19,90</span>
              </span>
            </div>
          </div>
          <div className="image-12-parent11">
            <img className="image-12-icon" alt="" src="/image-121@2x.png" />
            <div className="peito-de-frango1">Peito de Frango</div>
            <div className="esse-t-no21">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="frame-child29" />
            <div className="adicionar-ao-carrinho21">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container42">
              <span className="a-partir-de-container1">
                <span>A partir de</span>
                <span className="span">{` `}</span>
                <span className="r-199022">R$ 19,90</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpio;
