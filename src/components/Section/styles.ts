import styled from "styled-components";
import { Props } from ".";
import { CardContainer } from "../../components/Product/styles";
import { cores } from "../../styles";


export const Container = styled.section<Omit<Props, 'title' >>`
    padding: 32px 0;
    background-color: ${props => props.background === 'black' ? cores.background : cores.primary};
    color: ${props => props.background === 'gray' ? '#fff' : '#fff'};

    ${CardContainer} {
        background-color: ${props => props.background === 'black' ? cores.primary : cores.background};
    }

    p {
        font-size: 14px;
        line-height: 22px;
        max-width: 640px
    }
`;


export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
`
