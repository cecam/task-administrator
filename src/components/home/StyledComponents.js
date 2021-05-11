import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Text = styled.p`
    font-size: 20px;
    text-align: center;
    color: var(--darkBlue);
    letter-spacing: 1px;
    margin: 0 0 20px 0;
`

export const appear = keyframes({
    'from': {
        opacity: '0',
    },
    'to': {
        opacity: '1',
    }
})

export const spin = keyframes({
    'from': {
        transform: 'rotate(0deg)'
    },
    'to': {
        transform: 'rotate(360deg)'
    }
})