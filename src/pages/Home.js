import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <img className="home-child" alt="" src="/vector-1.svg" />
      <div className="pedidos-direto-da">Pedidos direto da sala de aula!</div>
      <div className="home-item" />
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
      <div className="fazer-pedido">Fazer Pedido</div>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="fure-filas-desnecessrias">Fure filas desnecessárias.</div>
      <div className="realizando-o-pedido">
        Realizando o pedido pela nossa plataforma, você economiza o tempo gasto
        em filas e a fadiga desnecessária. Já imaginou você fazer o seu pedido
        nos 5 minutos antes da aula acabar e retirar o seu lanche assim que sair
        da sala sem enfrentar nenhuma fila quilométrica?
      </div>
      <div className="home-inner" />
      <div className="fazer-o-meu">Fazer o meu pedido agora</div>
      <img className="vector-icon" alt="" src="/vector-2.svg" />
      <div className="group-parent">
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="image-3-1" alt="" src="/image-3-1@2x.png" />
          <b className="praticidade">Praticidade</b>
          <div className="faa-seu-pedido">
            Faça seu pedido direto da sala de aula ou de onde estiver e retire
            em nosso balcão em minutos!
          </div>
        </div>
        <div className="rectangle-group">
          <div className="group-child" />
          <img className="image-3-1" alt="" src="/image-4-1@2x.png" />
          <div className="voc-no-precisa">
            Você não precisa enfretar filas para fazer o seu lanche, basta fazer
            o seu pedido no site e aguardar!
          </div>
          <b className="facilidade">Facilidade</b>
        </div>
        <div className="rectangle-container">
          <div className="group-child" />
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
