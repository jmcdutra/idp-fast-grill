import { useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/cardapio");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="home6">
      <img className="home-child" alt="" src="/vector-1.svg" />
      <div className="pedidos-direto-da">Pedidos direto da sala de aula!</div>
      <div className="faa-seu-pedido-container">
        <p className="faa-seu-pedido-pelo-site-ou-a">
          <span>
            Faça seu pedido pelo site ou aplicativo e retire diretamente no
            balcão em nossa lanchonete no
          </span>
          <b className="idp"> IDP!</b>
        </p>
        <p className="faa-seu-pedido-pelo-site-ou-a">
          Já imaginou você fazer o seu pedido nos 5 minutos antes da aula acabar
          e retirar o seu lanche assim que sair da sala sem enfrentar nenhuma
          fila quilométrica?
        </p>
      </div>
      <Button
        className="home-item"
        sx={{ width: 273.3333435058594 }}
        variant="contained"
        color="primary"
        onClick={onGroupButtonClick}
      >
        Fazer Pedido
      </Button>
      <img
        className="image-1-icon"
        alt=""
        src="/image-1@2x.png"
        data-animate-on-scroll
      />
      <div className="fure-filas-desnecessrias">Fure filas desnecessárias.</div>
      <div className="realizando-o-pedido">
        Realizando o pedido pela nossa plataforma, você economiza o tempo gasto
        em filas e a fadiga desnecessária. Já imaginou você fazer o seu pedido
        nos 5 minutos antes da aula acabar e retirar o seu lanche assim que sair
        da sala sem enfrentar nenhuma fila quilométrica?
      </div>
      <div className="rectangle-parent22">
        <div className="group-child35" />
        <div className="fazer-o-meu">Fazer o meu pedido agora</div>
      </div>
      <img className="home-inner" alt="" src="/vector-2.svg" />
      <div className="frame-parent">
        <div className="image-3-1-parent">
          <img className="image-3-1" alt="" src="/image-3-1@2x.png" />
          <b className="praticidade">Praticidade</b>
          <div className="faa-seu-pedido">
            Faça seu pedido direto da sala de aula ou de onde estiver e retire
            em nosso balcão em minutos!
          </div>
        </div>
        <div className="image-4-1-parent">
          <img className="image-3-1" alt="" src="/image-4-1@2x.png" />
          <div className="voc-no-precisa">
            Você não precisa enfretar filas para fazer o seu lanche, basta fazer
            o seu pedido no site e aguardar!
          </div>
          <b className="facilidade">Facilidade</b>
        </div>
        <div className="image-4-1-parent">
          <img className="image-3-1" alt="" src="/image-5-1@2x.png" />
          <div className="encontrou-um-problema">
            Encontrou um problema com o seu pedido? tenha um suporte
            personalizado diretamente em nosso site!
          </div>
          <b className="facilidade">Suporte</b>
        </div>
      </div>
      <Footer />
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
      <Header />
    </div>
  );
};

export default Home;
