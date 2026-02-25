/* eslint-disable prettier/prettier */

import { TagContainer } from "./styles"

export type TagProps = {
    size?: 'small' | 'big'
    children?: string
}

const Tag = ({ children, size = 'small' }: TagProps) => (
    <TagContainer size={size}>{children}</TagContainer>
)

export default Tag