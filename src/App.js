
import React,{useState} from 'react';
import Header from './components/header/header'
import Item from './components/items/items';

import Cart from './components/Cart/Cart';
import { Provider } from './components/store/CartContext';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => {
    setIsVisible(true);
  };

  const hideCartHandler = () => {
    setIsVisible(false);
  };

  return (
    <Provider>

      {isVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Item />
    </Provider>
  );
}

export default App;
