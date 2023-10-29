import styled from 'styled-components';

export const StyledPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 999;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(6.5px);

    .popup-content {
        padding: 20px;
        position: relative;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledButton = styled.button`
    && {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        border: none;
        background-color: rgb(249 126 156);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        font-size: 1.2em;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
            background-color: #f4364c;
        }
    }
`;
