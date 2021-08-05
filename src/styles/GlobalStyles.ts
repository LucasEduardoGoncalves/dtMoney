import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --purple: #5429CC;
        --purple-light: #6933ff;

        --green: #33CC95;
        --red: #E62E4D;
        
        --text-title: #363F5F;
        --text: #969CB3;

        --shape: #FFFFFF;
        --background:  #E5E5E5;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html { // REM = 1rem = tam(font-size)
        @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media(max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }     

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // deixa a fonte mais detalhada (só para navegadores que usam o v8 por baixo dos panos)
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6; 
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;