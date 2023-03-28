
import Link from 'next/link';

const MixedMenu = () => {
  return (
    <nav className="menu">
      <div className="menu-brand">
        <Link href="/">
          My App
        </Link>
      </div>
      <ul className="menu-list">
        <li className="menu-item">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/about">
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #e76100;
          padding: 10px;
        }
        .menu-brand a {
          color: #480039;
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
        }
        .menu-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .menu-item {
          margin-right: 20px;
        }
        .menu-item a {
          color: #480039;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          padding: 10px;
          transition: background-color 0.3s ease;
        }
        .menu-item a:hover {
          background-color: #555;
        }
      `}</style>
    </nav>
  );
};

export default MixedMenu;