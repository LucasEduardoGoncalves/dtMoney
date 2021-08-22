import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background: var(--purple);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
`;

export const Button = styled.button`
    font-size: 1rem;
    color: #fff;

    background-color: var(--purple-light);
    border: 0;

    padding: 0 2rem;
    border-radius: 0.25rem;

    height: 3rem;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    & + button {
        margin-left: 1rem;
    }
`;