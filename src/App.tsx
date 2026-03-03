import { Provider } from 'react-redux'
import { BrowserRouter }from 'react-router-dom'

import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'

import Rotas from './pages/routes'
import { store } from './store'
import { GlobalStyles } from './styles'


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <div className="container">
            <Header />
          
          </div>
          <Rotas />
          <Footer />
          <Cart />
      </BrowserRouter>
    </Provider>
    
  )
}

export default App
