import { Routes, Route } from 'react-router-dom';

import TestCategories from './routes/test-categories/test-categories.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Categories from './routes/categories/categories.component.jsx';
import './index.scss';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Categories />}/>
        <Route path="test-categories" element={<TestCategories />}/>
      </Route>
    </Routes>
  );
};

export default App;
