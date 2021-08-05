import styled, { css } from 'styled-components';

interface Props {
    total: boolean;
}

export const Container = styled.div<Props>`
    background: var(--shape);
    padding: 1.5rem 2rem;

    border-radius: 0.25rem;

    color: var(--text-title);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-size: 1rem;
            font-weight: 400;
        }
    }

    strong {
        display: block;
        margin-top: 1.5rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    ${props => props.total && css`
        background: var(--green);
        color: var(--shape);
    `}
`;
