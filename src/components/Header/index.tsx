//Criando o cabeçalho da aplicação!! 1 componente

//importando a imagem do logo
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {
    return (
        <Container>
            <Content>
            {/*Criando o meu cabeçalho! */}
            <img src={logoImg} alt="jgs money" />
            <button type="button">
                Nova transação
            </button>
            </Content>
        </Container>
    )
}