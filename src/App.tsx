/* eslint-disable prettier/prettier */
import { BrowserRouter }from 'react-router-dom'

import Header from './components/Header'

import { GlobalStyles } from './styles'

import Rotas from './pages/routes'
import Footer from './components/Footer'

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
