import { Link } from 'react-router-dom'
import Styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'


export const ButtonContainer = Styled.button<Props>`
    border: 2px solid ${(props=> props.variante === 'primary' ? colors.tag : colors.text)};
    background: ${(props=> props.variante === 'primary' ? colors.tag : 'transparent')};
    color: ${colors.text};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px;
    cursor: pointer;
`

export const ButtonLink = Styled(Link)`
    border: 2px solid ${colors.text};
    background: transparent;
    color: ${colors.text};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 8px;
`
