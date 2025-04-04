import Produto from '../components/Produto'
import * as S from './styles'
import { Produto as ProdutoType } from '../types/produto'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
