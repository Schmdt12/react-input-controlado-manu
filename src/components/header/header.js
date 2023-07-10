import {BotaoNavegacao, PrimeiroMenu} from "./header.jsx"
function Header(props) {

    const handlePageChange = ()=> {
      props.pagina()
    }

    return (
      <>
      <PrimeiroMenu>
        <BotaoNavegacao onClick={handlePageChange}>
        <img src={props.imgPrimeira} alt="oioi"></img>
        </BotaoNavegacao>

        <BotaoNavegacao onClick={handlePageChange}
        >
        <img src={props.imgSegunda} alt="oioi"></img>
        </BotaoNavegacao>
      </PrimeiroMenu>
      </>
    );
  }
  
  export default Header;