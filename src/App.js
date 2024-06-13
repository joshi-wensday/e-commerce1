import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component.jsx';
import Layout from './components/layout/layout.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import './index.scss';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="contact" element={<Shop />}/>
      </Route>
    </Routes>
  );
};

export default App;
