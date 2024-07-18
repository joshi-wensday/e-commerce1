import { Routes, Route } from 'react-router-dom';

import TestCategories from './routes/test-categories/test-categories.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Categories from './routes/categories/categories.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';
import './index.scss';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Categories />}/>
        <Route path="test-categories" element={<TestCategories />}/>
        <Route path="auth" element={<Authentication />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="checkout" element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;
