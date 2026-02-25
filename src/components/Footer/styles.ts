/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.footer`
    background-color: ${cores.primary};
    padding: 40px 0;
    font-size: 14px;

    a {
        color: ${cores.tag};
        margin-left: 4px;
        text-decoration: none;
    }
` 

export const SectionTitle = styled.h4`
    color: ${cores.text};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const Links = styled.ul`
    display: flex;
`

export const Link = styled.a`
    color: ${cores.secundary};
    text-decoration: none;
    margin-right: 8px;
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`

export const Copyright = styled.p`

`