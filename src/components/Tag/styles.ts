import styled from "styled-components";
import { TagProps } from '.'
import { colors } from "../../styles";


export const TagContainer = styled.div<TagProps>`
    display: inline-block;
    background-color: ${colors.tag};
    color: ${colors.text};
    font-size: ${props => props.size === 'small' ? '10px' : '16px'};
    font-weight: bold;
    padding: ${props => props.size === 'small' ? '4px 6px' : '8px 16px'};
    border-radius: 8px;
`
