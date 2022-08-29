import './App.css';
import Layout from './components/layouts/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Favoritos from './components/pages/Favoritos';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
