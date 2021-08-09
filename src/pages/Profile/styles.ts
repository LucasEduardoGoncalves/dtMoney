import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2.5rem 1rem;
`;


export const InfoProfile = styled.header`
    display: flex;
    align-items: center;

    gap: 2rem;
    margin-top: -7rem;

    img {
        width: 8rem;
        height: 8rem;
        padding: 0.5rem;

        background: var(--green);
        border-radius: 50%;
    }

    > div {
        line-height: 4rem;

        h2 {
            font-size: 2rem;
            color: var(--shape);
        }

        span {
            font-size: 1.5rem;
            color: var(--purple);
        }
    }
`;

export const HistoricTransactionTitle = styled.h3`
    padding: 5rem 0 2rem 0;
    font-size: 1.5rem;
    color: var(--purple);
    font-weight: normal;
`;

export const HistoricTransaction = styled.table`
    width: 100%;

    th {
        color: var(--text);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;

        line-height: 1.5rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;

        background: var(--shape);
        border-radius: 0.25rem;
        color: var(--text);

        &:first-child{
            color: var(--text-title);
        }
    }
`;


