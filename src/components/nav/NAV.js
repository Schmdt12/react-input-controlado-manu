import filtro from "../../assets/filter.png"
import Botao from "../botao/Botao"

import { ContainerNav } from "./nav.jsx"

function Nav() {
    return (
        <>
            <ContainerNav>
                <Botao titulo={"Donuts"}/>
                <Botao titulo={"Ice Cream"}/>
                <Botao titulo={"Bomboloni"}/>
                <img src={filtro} alt="filtro" />
            </ContainerNav>
        </>
    )
}

export default Nav