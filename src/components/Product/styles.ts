import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const CardContainer = styled(Link)`
    background: ${colors.primary};
    padding: 8px;
    border-radius: 8px;
    position: relative;
    text-decoration: none;
    color: ${colors.text};
    display: block;
    height: 100%;

    img {
        display: block;
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const TitleCard = styled.h3`
    color: ${colors.text};
    font-size: 16px;
    font-weight: bold;
    display: block;
    margin-top: 16px;
    margin-bottom: 8px;
`

export const DescriptionCard = styled.p`
    color: ${colors.text};
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
