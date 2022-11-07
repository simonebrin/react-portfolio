import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({categories, setCurrentCategory, currentCategory}) {

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
    console.log(currentCategory);
  }, [currentCategory]);

  //       const handleClick = (item) => {
  //     console.log(item);
  //     return item;
  //   };

  // const Nav = () => {
  return (

      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
