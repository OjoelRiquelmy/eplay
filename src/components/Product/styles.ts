/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const CardContainer = styled.div`
    background: ${cores.primary};
    padding: 8px;
    border-radius: 8px;
    position: relative;

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const TituloCard = styled.h3`
    color: ${cores.text};
    font-size: 16px;
    font-weight: bold;
    display: block;
    margin-top: 16px;
    margin-bottom: 8px;
`

export const DescricaoCard = styled.p`
    color: ${cores.text};
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const Image = styled.img`
    height: 222px;
    width: 100%;
    border-radius: 8px;
`