import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderBar = styled.header`
    background-color: ${cores.primary};
    display: flex;
    align-items: center;
    padding: 24px;
    border-radius: 16px; 
    margin-bottom: 80px;
    justify-content: space-between;

    a {
        color: ${cores.text};
        text-decoration: none;
        font-weight: bold;
    }
    
    div {
        display: flex;
        align-items: center;
    }
`;

export const Links = styled.ul`
    display: flex;
    margin-left: 40px;
`;

export const LinkItem = styled.li`
    margin-right: 16px;
    
`
export const Cart = styled.a`
    display: flex;

    img {
        margin-left: 16px;
    }
`