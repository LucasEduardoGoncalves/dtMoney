import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    height: 100%;
    overflow: auto;
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
        color: var(--text);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;

        line-height: 1.5rem;
    }

    tr {
        .button {
            button{
                opacity: 0;
            }
        }

        &:hover {
            .button {
                button {
                    opacity: 1;
                }   
            }

            td {
                border-bottom: 1px solid var(--purple);
            }
        }
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        border-bottom: 1px solid var(--shape);

        background: var(--shape);
        color: var(--text);

        &:first-child{
            color: var(--text-title);
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            border: 0;
            background: transparent;

            svg {
                color: var(--red);
                font-size: 1.5rem;

                transition: filter 0.2s;
                
                &:hover {
                    filter: brightness(0.8);
                }
            }
        }
    }
`;