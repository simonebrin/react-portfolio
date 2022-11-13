import React from 'react';
import Nav from '../Nav';

const Header = (props) => {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
    } = props;
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          SIMONE BRIN
        </a>
      </h2>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
    </header>
  );
}

export default Header