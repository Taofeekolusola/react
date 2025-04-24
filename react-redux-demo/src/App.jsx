import CakeShop from './components/CakeShop'
import WaterShop from './components/WaterShop'
import IceCreamShop from './components/IceCreamShop'
import HooksCakeContainer from './components/HooksCakeContainer'
import { Provider } from 'react-redux'
import store  from './components/reduxStuff/cake/Store'
function App() {

  return (
    <Provider store={store}>
      <div>
        <CakeShop />
        <HooksCakeContainer />
        <IceCreamShop />
        <WaterShop />
      </div>
    </Provider>
  )
}

export default App
