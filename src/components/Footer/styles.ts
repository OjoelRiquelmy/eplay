import { HashLink } from 'react-router-hash-link'
import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.footer`
    background-color: ${colors.primary};
    padding: 40px 0;
    font-size: 14px;
    margin-top: 40px;

    a {
        color: ${colors.tag};
        margin-left: 4px;
        text-decoration: none;
    }
`

export const SectionTitle = styled.h4`
    color: ${colors.text};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
`

export const Links = styled.ul`
    display: flex;
`

export const Link = styled(HashLink)`
    color: ${colors.secundary};
    text-decoration: none;
    margin-right: 8px;
`

export const FooterSection = styled.div`
    margin-bottom: 64px;
`

export const Copyright = styled.p`

`
