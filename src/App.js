import './App.css';
import Layout from './components/layouts/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Favoritos from './components/pages/Favoritos';
import ToastContainerMod from './components/ToastContainerMod';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
      </Layout>
    </BrowserRouter>
    <ToastContainerMod />
    </div>
  );
}

export default App;
