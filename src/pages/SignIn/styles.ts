import styled from 'styled-components';

export const Container = styled.main`
    height: 100vh; 
    display: flex;
    justify-content: center; 
    background: var(--purple-light);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    text-align: center;

    img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6rem;
    } 

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        margin-top: 16px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 2rem;
            margin-right: 2rem;
        }
        
        border-radius: 10px;
        height: 56px;
        border: 0;
        padding: 0 16px;
        width: 100%;
        font-weight: 500;
        cursor: pointer;
        
        &.google {
            background: var(--red);
            border: 1px solid var(--red);

            color: var(--shape);
        }

        &.github {
            background: var(--shape);
        }

    }   
`;