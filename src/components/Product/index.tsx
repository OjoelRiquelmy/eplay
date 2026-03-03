
import { CardContainer, DescricaoCard, TituloCard, Infos, Image } from './styles'
import Tag from '../Tag'



type ProductProps = {
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    images: string
    id: number
}

const Product = ({title, category, system, description, infos, images, id}: ProductProps) => {
    const getDescricao = (descricao: string) => {
        if (descricao.length > 95) {
            return descricao.slice(0, 92) + '...'
        }
        return descricao
    }
    
        return (
        <CardContainer to={`/product/${id}`}>
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
                {getDescricao(description)}
            </DescricaoCard>
        </CardContainer>
    )
}

export default Product