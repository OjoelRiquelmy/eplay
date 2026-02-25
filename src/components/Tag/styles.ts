/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { cores } from "../../styles";

import { TagProps } from '.'

export const TagContainer = styled.div<TagProps>`
    display: inline-block;
    background-color: ${cores.tag};
    color: ${cores.text};
    font-size: ${props => props.size === 'small' ? '10px' : '16px'};
    font-weight: bold;
    padding: ${props => props.size === 'small' ? '4px 6px' : '8px 16px'};
    border-radius: 8px;
`