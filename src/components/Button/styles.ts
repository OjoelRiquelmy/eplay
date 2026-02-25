/* eslint-disable prettier/prettier */
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'



export const ButtonContainer = Styled.button`
    border: 2px solid ${cores.text};
    background: transparent;
    color: ${cores.text};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px;
`

export const ButtonLink = Styled(Link)`
    border: 2px solid ${cores.text};
    background: transparent;
    color: ${cores.text};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 8px;
`