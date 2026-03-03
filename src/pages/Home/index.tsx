
import Banner from "../../components/Banner"
import Productslist from "../../components/ProductsList"

import { useGetOnSaleQuery, useGetSoonQuery  }  from '../../services/api'

export interface GalleryItem {
    type: 'image' | 'video'
    url: string
}

export type Game = {
    id: number
    name: string
    description: string
    release_date?: string
    prices: {
        discount: number
        old?: number
        current?: number
    }
    details: {
        category: string
        system: string
        developer: string
        publishser: string
        languages: string[]
    }
    media: {
        thumbnail: string
        cover: string
        gallery: [GalleryItem]
    }
}

const Home = () => {
    const {data: onSale} = useGetOnSaleQuery()
    const {data: soonGames} = useGetSoonQuery()

    if (onSale && soonGames) {
        return (
            <>
                <Banner />
                <Productslist id="on-sale" title="Jogos em Destaque" background="gray" games={onSale} />
                <Productslist id="coming-soon" title="Em breve" background="black" games={soonGames} />
            </>
        )
    }
    return<h4>carregando</h4>
        
}

export default Home
