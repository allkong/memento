import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>중첩 라우트 Layout</h2>
      <nav>
        <Link
          to="/labs/router/profile"
          style={{
            marginRight: 10,
          }}
        >
          프로필
        </Link>
        <Link to="/labs/router/settings">설정</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
