
import Productslist from "../../components/ProductsList"

import { useGetActionQuery, 
    useGetEsportesQuery, 
    useGetRPGQuery, 
    useGetSimulacaoQuery, 
    useGetLutaQuery} from '../../services/api'

const Categories = () => {
    const { data: action } = useGetActionQuery()
    const { data: RPG } = useGetRPGQuery()
    const { data: esportes } = useGetEsportesQuery()
    const { data: simulacao } = useGetSimulacaoQuery()
    const { data: luta } = useGetLutaQuery()

    if (action && RPG && esportes && simulacao && luta ) {
        
        return (
            <>
                <Productslist title="Ação" background="black" games={action} />
                <Productslist title="RPG" background="gray" games={RPG} />
                <Productslist title="Esportes" background="black" games={esportes} />
                <Productslist title="Simulação" background="gray" games={simulacao} />
                <Productslist title="Luta" background="black" games={luta} />
            </>
        )
    }
    
    return <h4>carregando</h4>
    
}

export default Categories
