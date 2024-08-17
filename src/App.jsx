import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import General from './pages/General';
import Certifacates from './pages/Certifacates';
import Skills from './pages/Skills';
import Experiences from './pages/Experiences';
import Header from './components/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="general" element={<General />} />
      <Route path="certificates" element={<Certifacates />} />
      <Route path="skills" element={<Skills />} />
      <Route path="experiences" element={<Experiences />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
