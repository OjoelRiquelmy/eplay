import styled from "styled-components";
import { ProductsListProps } from ".";
import { cores } from "../../styles";

import { CardContainer } from "../Product/styles";

export const ProductsListContainer = styled.section<Omit<ProductsListProps, 'title' | 'games'>>`
    padding: 32px 0;
    background-color: ${props => props.background === 'black' ? cores.background : cores.primary};
    color: ${props => props.background === 'gray' ? '#fff' : '#fff'};

    ${CardContainer} {
        background-color: ${props => props.background === 'black' ? cores.primary : cores.background};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
    margin-top: 40px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
`
