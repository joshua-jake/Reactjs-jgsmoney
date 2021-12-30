//Estilização em css que pertencem somente ao header 

import styled from 'styled-components';

//criando o primeiro components para ser estilizado! 

export const Container = styled.header`
    background-color: var(--blue);

`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem; //para direita e esquerda
        border-radius: 0.25rem; //equivale a 4px
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9); //escurecendo levemente ao passar o mouse
        }

    }
`;