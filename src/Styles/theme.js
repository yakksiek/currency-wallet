import styled, { css } from 'styled-components';

const theme = {
    palete: {
        dark: {
            body: 'var(--dark-color-1)',
            title: 'var(--dark-color-3)',
            text: 'var(--dark-color-3)',
            'element-bg': 'var(--black)',
            'btn-bg': 'var(--dark-color-2)',
            'btn-text': 'var(--dark-color-3)',
            'btn-hover': 'var(--color-2)',
        },
        light: {
            body: 'var(--color-1)',
            title: 'var(--color-4)',
            text: 'var(--color-4)',
            'element-bg': 'var(--color-2)',
            'btn-bg': 'var(--color-3)',
            'btn-text': 'var(--color-1)',
            'btn-hover': 'var(--color-3)',
        },
    },
    wrapper: {
        icon: css`
            border: 1px solid var(--accent-color-3);
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--button-radius);
        `,
    },
};

export default theme;
