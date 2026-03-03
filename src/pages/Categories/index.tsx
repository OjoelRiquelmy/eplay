
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
                <Productslist id="action" title="Ação" background="black" games={action} />
                <Productslist id="rpg" title="RPG" background="gray" games={RPG} />
                <Productslist id="sportes" title="Esportes" background="black" games={esportes} />
                <Productslist id="simulation" title="Simulação" background="gray" games={simulacao} />
                <Productslist id="fight" title="Luta" background="black" games={luta} />
            </>
        )
    }
    
    return <h4>carregando</h4>
    
}

export default Categories
