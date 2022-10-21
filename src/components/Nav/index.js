import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  // useEffect is an API that reflects the lifecycle methods of the component, such as when the component mounts, unmounts, or updates.
  // use this hook to trigger a re-render on a variable value change
  // first item is the callback function and the second item is an array
  // the second argument directs the hook to re-render the component on changes to the value of this state.
  // if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user.
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li 
              // if category is selected (true), return navActive class
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`}`} 
              // When mapping, the outermost element must havea key attribute that's set to be something unique. 
              // This helps React keep track of items in the virtual DOM.
              key={category.name}
            >
              <span 
                // onClick expects a callback function declaration
                // Wrap it in a function declaration to prevent calling the function upon rendering
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }} 
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;