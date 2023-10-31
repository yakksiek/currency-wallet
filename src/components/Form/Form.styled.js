import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    min-height: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`;

export const StyledForm = styled.form`
    display: flex;
    position: relative;

    .btn-submit {
        position: absolute;
        right: 0;
        bottom: 0;
        height: var(--min-input-height);
        width: var(--min-input-width);
        border: 2px solid var(--color-3);
        border-radius: var(--element-radius);
        font-size: 1rem;
        background-color: transparent;

        &:hover {
            background-color: var(--color-3);
            color: var(--color-2);
            transition: color 0.3s, background-color 0.3s;
        }
    }
`;
