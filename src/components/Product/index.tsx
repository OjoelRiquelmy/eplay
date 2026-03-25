
import * as S from './styles'
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
    const getDescription = (text: string) => {
        if (text.length > 95) {
            return text.slice(0, 92) + '...'
        }
        return text
    }

        return (
        <S.CardContainer title={`Clique aqui para ver mais detalhe do jogo: ${title}`} to={`/product/${id}`}>
            <S.Image src={images} alt="Resident Evil 4 Remake" />
            <S.Infos>
                {infos.map(info => (
                    <Tag key={info}>{info}</Tag>
                ))}
            </S.Infos>
            <S.TitleCard>{title}</S.TitleCard>
            <Tag>{system}</Tag>
            <Tag>{category}</Tag>
            <S.DescriptionCard>
                {getDescription(description)}
            </S.DescriptionCard>
        </S.CardContainer>
    )
}

export default Product
