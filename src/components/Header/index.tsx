import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const favorites = useSelector((state: RootState) => state.favorites.items)

  const valorTotal = cartItems.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorites.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {cartItems.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}
