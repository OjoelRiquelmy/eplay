import { BrowserRouter }from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import Rotas from './pages/routes'
import { GlobalStyles } from './styles'


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="container">
        <Header />
      
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
