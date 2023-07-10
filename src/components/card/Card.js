import { ContainerCard, DivCard, ImagemCard, TextCard, TituloCard } from "./card.jsx";

function Card(){
    return(
        <>
        <ContainerCard>
            <ImagemCard src="" />
                <TituloCard>Unicorn Spring</TituloCard>
            <TextCard>Strawberry creamy...</TextCard>
            <DivCard>
                <p>7.800</p>
                <a>Mais</a>
            </DivCard>
        </ContainerCard> 
        </>
    )
}
export default Card;