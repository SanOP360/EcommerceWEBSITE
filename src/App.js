import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import React,{useState} from 'react';
import Header from './components/header/header'
import Item from './components/items/items';
import RootLayout from './components/UI/Root'; 

import Cart from './components/Cart/Cart';
import { Provider } from './components/store/CartContext';
import About from './components/About/About';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Item /> },
      { path: '/About', element: <About /> }  
    ],
  },
]);
  

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
      <RouterProvider router={router}>
        {isVisible && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Item />
      </RouterProvider>
    </Provider>
  );
}
export default App;
