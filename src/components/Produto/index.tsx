import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Produto } from '../../types/produto'
import { addToCart } from '../../features/cart/cartSlice'
import { toggleFavorite } from '../../features/favorites/favoritesSlice'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: { produto: Produto }) => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.items)
  const estaNosFavoritos = favorites.some(
    (item: Produto) => item.id === produto.id
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(toggleFavorite(produto))}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(addToCart(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
