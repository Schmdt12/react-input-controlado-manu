import { useState } from 'react';
import './App.css';
// import Detalhes from './page/Detalhes/detalhes';
import Home from "./page/home/Home";
import StyledGlobal, { CorFundo } from './styledGlobal';
import Detalhes from './page/Detalhes/detalhes';


function App() {

  const [trocardePagina, settrocardePagina] = useState(0)

  const changePage = (change) => {
    settrocardePagina(change)
  }

  return (
    <>
    <CorFundo>
      <StyledGlobal/>
      {trocardePagina === "0" ? (
        <Home pagina={()=> changePage("1")}/>
      ) : (
        <Detalhes pagina={()=> changePage("0")}/>
      ) 
    }

    </CorFundo>
    </>
  );
}

export default App;
