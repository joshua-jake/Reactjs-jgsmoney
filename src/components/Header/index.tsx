//Criando o cabeçalho da aplicação!! 1 componente
//importando a imagem do logo
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
            {/*Criando o meu cabeçalho! */}
            <img src={logoImg} alt="jgs money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>

            </Content>
        </Container>
    )
}