import { BotaoEstilo } from "./Botao.jsx"

function Botao(props) {
    return (
        <>
         <BotaoEstilo>
            {props.titulo}
        </BotaoEstilo>  
        </>
    )
}

export default Botao