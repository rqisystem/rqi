import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] space-y-4">
      <Header />

      <Outlet />
    </div>
  );
};

export default Layout;
