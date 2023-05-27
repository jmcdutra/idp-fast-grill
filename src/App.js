import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PagamentoStatus3 from "./pages/PagamentoStatus3";
import PagamentoStatus from "./pages/PagamentoStatus";
import PagamentoStatus2 from "./pages/PagamentoStatus2";
import PagamentoConferir from "./pages/PagamentoConferir";
import PagamentoForma from "./pages/PagamentoForma";
import Unidade from "./pages/Unidade";
import Cardpio from "./pages/Cardpio";
import Home from "./pages/Home";
import Modal from "./pages/Modal";
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
      case "/pagamentoforma":
        title = "";
        metaDescription = "";
        break;
      case "/unidade":
        title = "";
        metaDescription = "";
        break;
      case "/cardapio":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/modal":
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
      <Route path="/" element={<PagamentoStatus3 />} />
      <Route path="/pagamentostatus" element={<PagamentoStatus />} />
      <Route path="/pagamentostatus2" element={<PagamentoStatus2 />} />
      <Route path="/pagamentoconferir" element={<PagamentoConferir />} />
      <Route path="/pagamentoforma" element={<PagamentoForma />} />
      <Route path="/unidade" element={<Unidade />} />
      <Route path="/cardapio" element={<Cardpio />} />
      <Route path="/home" element={<Home />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
}
export default App;
