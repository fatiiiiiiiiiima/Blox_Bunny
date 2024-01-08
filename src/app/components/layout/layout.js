import Sidebar from '../sidebar/sidebar';
import './globals.css'

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
