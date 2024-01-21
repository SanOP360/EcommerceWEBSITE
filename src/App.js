


import React,{useState} from 'react';
import Header from './components/header/header'
import Item from './components/items/items';

import Cart from './components/Cart/Cart';


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => {
    setIsVisible(true);
  };

  const hideCartHandler = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Item />
    </>
  );
}

export default App;
