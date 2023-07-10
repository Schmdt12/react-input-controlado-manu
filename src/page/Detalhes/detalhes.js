import Header from "../../components/header/header.js";
import seta from "../../assets/seta.png"
import ponto from "../../assets/3pontos.png"
import group from "../../assets/Group.png"
import DonutRosa from "../../assets/donutrosa.png"
import { BotaoAddCard, BotaoMore, ContainerDetalhes, MaisProdutos, TextMore, TextNumber, ImagemGrande, ContainerDiv, TituloDonuts, TextoDonuts } from "./detalhes.jsx";


function Detalhes(props){
    return(
        <>
        <Header
        pagina = {props.pagina}
        imgPrimeira = {seta}
        imgSegunda = {ponto}
        />
        <ContainerDetalhes>
            <ImagemGrande src={DonutRosa}/>

            <ContainerDiv>
                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>
                <TextoDonuts>
                A fluffy fresh cooked donut covered by a creamy strawberry flavour with rainbow sprinkles.
                </TextoDonuts>

                <MaisProdutos>
                    <img src={group}/>
                    <TextNumber>7800</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>
                        Need More?
                    </TextMore>
                    <BotaoMore>
                        Add more
                    </BotaoMore>
                </MaisProdutos>

                <BotaoAddCard>
                    Add to cart
                </BotaoAddCard>
            </ContainerDiv>
        </ContainerDetalhes>

        </>
    )
}

export default Detalhes;