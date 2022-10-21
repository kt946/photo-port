import React, { useState } from 'react';
// import components
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

// root/wrapper component that houses all of the other components
function App() {
  // Whenever you think state needs to be used in multiple sibling components, 
  // it's normally a good idea to lift the state up until it can be passed as props to any child components that need it.
  const [categories] = useState([
    { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects" },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  // written in JSX (HTML in JavaScript)
  // uses PascalCase for components to distinguish them from other JSX elements
  return (
    <div>
      <Nav
        // pass values and setters as props to components that need them
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
