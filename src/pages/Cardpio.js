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
    navigate("/");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/modal");
  }, [navigate]);

  return (
    <div className="cardpio6">
      <div className="fluentbox-24-filled7" />
      <div className="footer7">
        <div className="vecteezy-restaurant-logo-food-container">
          <img
            className="vecteezy-restaurant-logo-food-icon15"
            alt=""
            src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced71.svg"
          />
          <b className="fast-grill-5">FAST GRILL - IDP</b>
          <div className="todos-os-direitos5">
            2023 - Todos os Direitos Reservados.
          </div>
        </div>
      </div>
      <div className="cardpio-child" />
      <div className="cardpio-inner">
        <div className="rectangle-parent30" onClick={onGroupContainerClick}>
          <div className="group-child76" />
          <img className="vector-icon22" alt="" src="/vector21.svg" />
          <div className="ver-outras-unidades1">Ver outras unidades</div>
        </div>
      </div>
      <img
        className="vecteezy-restaurant-logo-food-icon16"
        alt=""
        src="/vecteezy-restaurantlogofoodlogo-5386195-2@2x.png"
      />
      <div className="header6">
        <div className="home7" onClick={onHomeTextClick}>
          Home
        </div>
        <b className="cardpio7">Cardápio</b>
        <div className="header-child10" />
        <div className="rea-do-cliente6">Área do Cliente</div>
        <img
          className="vecteezy-restaurant-logo-food-icon17"
          alt=""
          src="/vecteezy-restaurantlogofoodlogo-5386195-1-traced8.svg"
        />
        <img
          className="vector-icon23"
          alt=""
          src="/vector11.svg"
          onClick={onVectorIcon1Click}
        />
      </div>
      <div className="cardpio-item" />
      <b className="fastgrill-idp3">FastGrill - IDP Asa Norte</b>
      <div className="sgan-609-mdulo2">
        SGAN 609 Módulo A - Asa Norte, Brasília - DF, 70830-401
      </div>
      <div className="pedidos-na-sua-container1">
        <span>{`Pedidos na sua frente: `}</span>
        <b>#0004</b>
      </div>
      <div className="tempo-mdio-de-container1">
        <span>{`Tempo médio de espera: `}</span>
        <b>12 minutos</b>
      </div>
      <b className="aberto-at-as2">Aberto até as 20:00hrs</b>
      <div className="cardpio-child1" />
      <div className="categorias-group">
        <b className="categorias1">CATEGORIAS</b>
        <div className="sucos-tapioca1">{`Sucos    |    Tapioca Salgada    |    Tapioca Doce |    Cuscuz    |     Crepe Salgado     |     Crepe Doce     |      Omelete      |     Pratos Executivos    `}</div>
      </div>
      <div className="frame-div">
        <div className="frame-child11" />
        <img className="image-11-icon3" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango9">Peito de Frango</div>
        <b className="crepes">PRATOS EXECUTIVOS</b>
        <div className="esse-t-no9">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="rectangle-parent31" onClick={onGroupContainer1Click}>
          <div className="group-child77" />
          <div className="adicionar-ao-carrinho8">Adicionar ao Carrinho</div>
        </div>
        <div className="a-partir-de-container16">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent">
          <img className="image-12-icon5" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container18">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child13" />
        <img className="image-11-icon4" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango11">Peito de Frango</div>
        <div className="esse-t-no11">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child14" />
        <div className="adicionar-ao-carrinho10">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container20">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-group">
          <img className="image-12-icon6" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container22">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-container">
          <img className="image-12-icon5" alt="" src="/image-121@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container18">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
      </div>
      <div className="rectangle-parent32">
        <div className="frame-child11" />
        <img className="image-11-icon3" alt="" src="/image-111@2x.png" />
        <div className="peito-de-frango9">Peito de Frango</div>
        <b className="crepes">Crepes</b>
        <div className="esse-t-no9">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child18" />
        <div className="adicionar-ao-carrinho13">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container16">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent">
          <img className="image-12-icon5" alt="" src="/image-122@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container18">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child13" />
        <img className="image-11-icon4" alt="" src="/image-111@2x.png" />
        <div className="peito-de-frango11">Peito de Frango</div>
        <div className="esse-t-no11">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child14" />
        <div className="adicionar-ao-carrinho10">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container20">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-group">
          <img className="image-12-icon6" alt="" src="/image-122@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container22">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-container">
          <img className="image-12-icon5" alt="" src="/image-123@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container18">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
      </div>
      <div className="rectangle-parent33">
        <div className="frame-child11" />
        <img className="image-11-icon3" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango9">Peito de Frango</div>
        <b className="crepes">Tapioca Salgada</b>
        <div className="esse-t-no9">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child18" />
        <div className="adicionar-ao-carrinho13">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container16">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent">
          <img className="image-12-icon5" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container18">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child13" />
        <img className="image-11-icon4" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango11">Peito de Frango</div>
        <div className="esse-t-no11">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child14" />
        <div className="adicionar-ao-carrinho10">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container20">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-group">
          <img className="image-12-icon6" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container22">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-parent6">
          <img className="image-12-icon6" alt="" src="/image-11@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container22">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="frame-child31" />
        <img className="image-12-icon14" alt="" src="/image-11@2x.png" />
        <div className="peito-de-frango24">Peito de Frango</div>
        <div className="esse-t-no24">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child32" />
        <div className="adicionar-ao-carrinho23">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container46">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent7">
          <img className="image-12-icon6" alt="" src="/image-12@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container22">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="image-12-container">
          <img className="image-12-icon5" alt="" src="/image-121@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container18">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
        <div className="peito-de-frango-parent">
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <img className="image-13-icon" alt="" src="/image-13@2x.png" />
          <div className="a-partir-de-container52">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
      </div>
      <div className="rectangle-parent34">
        <div className="frame-child36" />
        <img className="image-11-icon9" alt="" src="/image-111@2x.png" />
        <div className="peito-de-frango28">Peito de Frango</div>
        <b className="tapioca-doce">Tapioca Doce</b>
        <div className="esse-t-no28">
          Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
          de pedir esse clássico né? Um irresistível filé de peito de frango
          grelhado e com aquele acompanhamento caprichado.
        </div>
        <div className="frame-child37" />
        <div className="adicionar-ao-carrinho27">Adicionar ao Carrinho</div>
        <div className="a-partir-de-container54">
          <span className="a-partir-de-container17">
            <span>A partir de</span>
            <span className="span8">{` `}</span>
            <span className="r-19909">R$ 19,90</span>
          </span>
        </div>
        <div className="image-12-parent9">
          <img className="image-12-icon5" alt="" src="/image-122@2x.png" />
          <div className="peito-de-frango10">Peito de Frango</div>
          <div className="esse-t-no10">
            Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai deixar
            de pedir esse clássico né? Um irresistível filé de peito de frango
            grelhado e com aquele acompanhamento caprichado.
          </div>
          <div className="frame-child12" />
          <div className="adicionar-ao-carrinho9">Adicionar ao Carrinho</div>
          <div className="a-partir-de-container18">
            <span className="a-partir-de-container17">
              <span>A partir de</span>
              <span className="span8">{` `}</span>
              <span className="r-19909">R$ 19,90</span>
            </span>
          </div>
        </div>
      </div>
      <img className="vector-icon24" alt="" src="/vector12.svg" />
      <img className="vector-icon25" alt="" src="/vector13.svg" />
      <div className="solarstar-bold-duotone-group">
        <div className="solarstar-bold-duotone7" />
        <img className="group-icon4" alt="" src="/group1.svg" />
        <div className="os-pratos-que1">
          Os pratos que estão fazendo sucesso entre nossos clientes hoje.
        </div>
        <div className="recomendaes-dirias-group">
          <b className="tapioca-doce">Recomendações Diárias</b>
          <div className="image-11-parent">
            <img className="image-12-icon5" alt="" src="/image-11@2x.png" />
            <div className="peito-de-frango10">Peito de Frango</div>
            <div className="esse-t-no30">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="frame-child39" />
            <div className="adicionar-ao-carrinho29">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container58">
              <span className="a-partir-de-container17">
                <span>A partir de</span>
                <span className="span8">{` `}</span>
                <span className="r-199030">R$ 19,90</span>
              </span>
            </div>
          </div>
          <div className="image-12-parent10">
            <img className="image-12-icon5" alt="" src="/image-124@2x.png" />
            <div className="peito-de-frango10">Peito de Frango</div>
            <div className="esse-t-no30">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="frame-child39" />
            <div className="adicionar-ao-carrinho29">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container58">
              <span className="a-partir-de-container17">
                <span>A partir de</span>
                <span className="span8">{` `}</span>
                <span className="r-199030">R$ 19,90</span>
              </span>
            </div>
          </div>
          <div className="image-12-parent11">
            <img className="image-12-icon5" alt="" src="/image-121@2x.png" />
            <div className="peito-de-frango10">Peito de Frango</div>
            <div className="esse-t-no30">
              Esse tá no top 3 dos mais pedidos do Fast Grill, você não vai
              deixar de pedir esse clássico né? Um irresistível filé de peito de
              frango grelhado e com aquele acompanhamento caprichado.
            </div>
            <div className="frame-child39" />
            <div className="adicionar-ao-carrinho29">Adicionar ao Carrinho</div>
            <div className="a-partir-de-container58">
              <span className="a-partir-de-container17">
                <span>A partir de</span>
                <span className="span8">{` `}</span>
                <span className="r-199030">R$ 19,90</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpio;
