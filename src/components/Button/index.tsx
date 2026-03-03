import { ButtonContainer, ButtonLink } from "./styles"

export type Props = {
    type: 'button' | 'link'
    title: string
    to?: string
    onClick?: () => void 
    children: string
    variante?: 'primary' | 'secondary'
}

const Button = ({ type, title, to, onClick, children, variante='primary' }: Props) => {
    if (type === 'button') {
        return (
            <ButtonContainer variante = {variante} type="button" title={title} onClick={onClick}>
                {children}
            </ButtonContainer>
        )
    } 

    return (
        <ButtonLink to={to as string} title={title}>
            {children}
        </ButtonLink>
    )
}

export default Button