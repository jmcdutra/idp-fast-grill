import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PagamentoForma from "./pages/PagamentoForma";
import Home from "./pages/Home";
import PagamentoStatus3 from "./pages/PagamentoStatus3";
import PagamentoStatus from "./pages/PagamentoStatus";
import PagamentoStatus2 from "./pages/PagamentoStatus2";
import PagamentoConferir from "./pages/PagamentoConferir";
import Unidade from "./pages/Unidade";
import Modal from "./pages/Modal";
import Cardpio from "./pages/Cardpio";
import AreaDoCliente from "./pages/AreaDoCliente";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentostatus3":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentostatus":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentostatus2":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentoconferir":
        title = "";
        metaDescription = "";
        break;
      case "/unidade":
        title = "";
        metaDescription = "";
        break;
      case "/modal":
        title = "";
        metaDescription = "";
        break;
      case "/cardapio":
        title = "";
        metaDescription = "";
        break;
      case "/area-do-cliente":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PagamentoForma />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pagamentostatus3" element={<PagamentoStatus3 />} />
      <Route path="/pagamentostatus" element={<PagamentoStatus />} />
      <Route path="/pagamentostatus2" element={<PagamentoStatus2 />} />
      <Route path="/pagamentoconferir" element={<PagamentoConferir />} />
      <Route path="/unidade" element={<Unidade />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/cardapio" element={<Cardpio />} />
      <Route path="/area-do-cliente" element={<AreaDoCliente />} />
    </Routes>
  );
}
export default App;
