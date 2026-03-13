import { ButtonContainer, ButtonLink } from "./styles"

export type Props = {
    type: 'button' | 'link' | 'submit'
    title: string
    to?: string
    onClick?: () => void
    children: string
    variante?: 'primary' | 'secondary'
    disabled?: boolean
}

const Button = ({ type, title, to, onClick, children, variante='primary', disabled }: Props) => {
    if (type === 'button' || type === 'submit') {
        return (
            <ButtonContainer variante = {variante} type={type} title={title} onClick={onClick} disabled={disabled}>
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
