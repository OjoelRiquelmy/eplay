/* eslint-disable prettier/prettier */

import Tag from '../Tag'

import { CardContainer, DescricaoCard, TituloCard, Infos, Image } from './styles'


type ProductProps = {
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    images: string
}

const Product = ({title, category, system, description, infos, images}: ProductProps) => (
    <CardContainer>
        <Image src={images} alt="Resident Evil 4 Remake" />
        <Infos>
            {infos.map(info => (
                <Tag key={info}>{info}</Tag>
            ))}
        </Infos>
        <TituloCard>{title}</TituloCard>
        <Tag>{system}</Tag>
        <Tag>{category}</Tag>
        <DescricaoCard>
            {description}
        </DescricaoCard>
    </CardContainer>
)

export default Product