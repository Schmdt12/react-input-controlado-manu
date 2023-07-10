import Card from "../../components/card/Card"
import Header from "../../components/header/header"
import Nav from "../../components/nav/NAV"
import Titulo from "../../components/tituloHeader/titulo.js"
import { SectionCard } from "./Home.jsx"
import Menu from "../../assets/retangulos.png"
import Pesquisa from "../../assets/search.png"

function Home(props){
    return(
        <>
        <Header
        pagina = {props.pagina}
        imgPrimeira = {Menu}
        imgSegunda = {Pesquisa}
        />
        <Titulo/>
        <Nav/>
        <SectionCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SectionCard>
        </>
    )
}

export default Home