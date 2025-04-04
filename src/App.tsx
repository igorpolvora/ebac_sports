import { useGetProductsQuery } from './app/api/productsApi'
import { Header } from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Produto } from '@/types/produto'

function App() {
  const { data: produtos = [], isLoading } = useGetProductsQuery()

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
