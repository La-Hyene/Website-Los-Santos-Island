import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Template from "./pages/template/Template.jsx"
import Home from "./pages/home/Home.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/about" element={ <Template />} />
          <Route exact path="/medias" element={ <Template />} />
          <Route exact path="/rules" element={ <Template />} />
          <Route exact path="/discord" element={ <Template />} />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
