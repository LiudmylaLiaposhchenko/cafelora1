import './index.css';
import { useState } from 'react';

export const Header = ({ showMenu }) => {
  const [menuExpand, setMenuExpand] = useState(false);
  const handleNavBtnClick = () => {
    setMenuExpand(!menuExpand);
  };

  return (
    <header id="home">
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button
            className="nav-btn"
            onClick={handleNavBtnClick}
            type="button"
          ></button>
          <nav
            className={menuExpand ? 'rollout-nav' : 'rollout-nav nav-closed'}
          >
            {showMenu ? (
              <a href="/#home">domů</a>
            ) : (
              <>
                <a href="#home">domů</a>
                <a href="#menu">menu</a>
                <a href="#gallery">galerie</a>
                <a href="#contact">kontakt</a>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
