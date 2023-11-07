import styled from 'styled-components';

export const StyledHeader = styled.div`
    margin-bottom: 2rem;

    && h2 {
        margin-bottom: 1rem;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;

    .btn-submit {
        height: var(--min-input-height);
        width: var(--min-input-width);
        border: 2px solid var(--color-3);
        border-radius: var(--element-radius);
        font-size: 1rem;
        background-color: transparent;
        margin: 0 auto;

        &:hover {
            background-color: var(--color-3);
            color: var(--color-2);
            transition: color 0.3s, background-color 0.3s;
        }
    }

    @media (min-width: 750px) {
        flex-direction: row;

        .btn-submit {
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
`;

export const StyledFieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 1rem;
`;

export const StyledErrorMessage = styled.div`
    padding: 2rem;

    p {
        margin-top: 0.5rem;
    }

    button {
        margin-top: 1rem;
    }
`;
