import styled from "styled-components"
import fechar from '../../assets/images/fechar.png'
import { cores } from "../../styles"
import { ButtonContainer } from "../Button/styles"
import { TagContainer } from "../Tag/styles"


export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const SideBar = styled.aside`
    background-color: ${cores.primary};
    z-index: 1;
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;

    ${ButtonContainer} {
        max-width: 100%;
        width: 100%;
    }
`

export  const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.text};
    margin-bottom: 24px;

    span {
        display: block;
        font-size: 12px;
        color: ${cores.secundary};
    }
`

export const Quantity = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: ${cores.text};
    margin-top: 32px;
    margin-bottom: 16px;
`

export  const CartItem = styled.li`
    display: flex;
    border-bottom: 1px solid ${cores.secundary};
    padding: 8px 0;
    position: relative;

    img {
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 24px;
    }

    h3 {
        color: ${cores.text};
        font-weight: bold;
        font-size: 16px;
    }

    span {
        display: block;
        fpmt-size: 14px;
        font-weight: bold;
    }

    ${TagContainer} {
        margin: 8px 0 16px 8px;
    }

    button {
        background-image: url(${fechar});
        height: 16px;
        width: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 8px;
        right: 0;
    }
`