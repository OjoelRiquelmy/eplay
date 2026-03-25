import { useParams } from 'react-router-dom'

import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import Section from '../../components/Section'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Product = () => {
    const { id } = useParams () as GameParams
    const { data: game } = useGetGameQuery(id)


    if (!game) {
        return <Loader />
    }

    return (
        <>
            <Hero game={game}/>
            <Section title={'Sobre o jogo'} background={'black'}>
                <p>
                    {game.description}
                </p>
            </Section>
            <Section title={'Detalhes'} background={'gray'}>
                <p>
                    <b>Plataforma:</b> {game.details.system} <br />
                    <b>Desenvolvedor:</b> {game.details.developer} <br />
                    <b>SoftwareEditora:</b> {game.details.publishser} <br />
                    <b>Interactive EntertainmentIdiomas:</b> O jogo oferece suporte a diversos
                    idiomas, incluindo {game.details.languages.join(', ')}
                </p>
            </Section>
            <Gallery defaultCover={game.media.cover} name={game.name} items={game.media.gallery}/>
        </>
    )
}

export default Product
