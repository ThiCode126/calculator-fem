import React from "react";

const Header = ({ theme, handleChangeTheme }) => {
  return (
    <header>
      <div className="content-wrapper">
        <div className="in-header">
          <h1>calc</h1>
          <div className="toggle">
            <h2>Theme</h2>
            <div className="toggle-theme" onClick={handleChangeTheme}>
              <div className="number">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className={`switch ${theme}`}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
