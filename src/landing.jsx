// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './App.css';

// function App() {
//   const [activePage, setActivePage] = useState('home');

//   const handlePageChange = (page) => {
//     setActivePage(page);
//   };

//   return (
//     <div className="App">
//       <header>
//         <nav>
//           <ul>
//             <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
//               Home
//             </li>
//             <li className={activePage === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>
//               About
//             </li>
//             <li className={activePage === 'products' ? 'active' : ''} onClick={() => handlePageChange('products')}>
//               Products
//             </li>
//             <li className={activePage === 'directories' ? 'active' : ''} onClick={() => handlePageChange('directories')}>
//               Directories
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         {activePage === 'home' && (
//           <section>
//             <h2>Get sustainable food and build a better world, one bite at a time.</h2>
//           </section>
//         )}
//         {activePage === 'about' && (
//           <section>
//             <h2>About Us</h2>
//             <p>We are a company dedicated to promoting sustainable food and agriculture.</p>
//           </section>
//         )}
//         {activePage === 'products' && (
//           <section>
//             <h2>Our Products</h2>
//             <ul>
//               <li>Organic fruits and vegetables</li>
//               <li>Grass-fed beef</li>
//               <li>Free-range chicken and eggs</li>
//             </ul>
//           </section>
//         )}
//         {activePage === 'directories' && (
//           <section>
//             <h2>Directories</h2>
//             <ul>
//               <li>Farmers markets</li>
//               <li>Community-supported agriculture programs</li>
//               <li>Local food co-ops</li>
//             </ul>
//           </section>
//         )}
//       </main>
//       <footer>
//         <p>&copy; 2023 My Sustainable Food Company</p>
//       </footer>
//     </div>
//   );
// }

// export default App;



//version 2
import { useState } from 'react';
import './landing.css';

function landing() {
  const [activePage, setActivePage] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <header>
        <nav  id ="header1">
          <ul>
            <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
              Home
            </li>
            <li className={activePage === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>
              About
            </li>
            <li className={activePage === 'products' ? 'active' : ''} onClick={() => handlePageChange('products')}>
              Products
            </li>
            <li className="dropdown">
              <span className={activePage === 'directories' ? 'active' : ''} onClick={toggleMenu}>
                Directories
              </span>
              {showMenu && (
                <ul className="dropdown-menu">
                  <li onClick={() => handlePageChange('farmers-markets')}>Farmers markets</li>
                  <li onClick={() => handlePageChange('community-supported-agriculture-programs')}>
                    Community-supported agriculture programs
                  </li>
                  <li onClick={() => handlePageChange('local-food-co-ops')}>Local food co-ops</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activePage === 'home' && (
          <section>
            <h2>Get sustainable food and build a better world, one bite at a time.</h2>
          </section>
        )}
        {activePage === 'about' && (
          <section>
            <h2>About Us</h2>
            <p>We are a company dedicated to promoting sustainable food and agriculture.</p>
          </section>
        )}
        {activePage === 'products' && (
          <section>
            <h2>Our Products</h2>
            <ul>
              <li>Organic fruits and vegetables</li>
              <li>Grass-fed beef</li>
              <li>Free-range chicken and eggs</li>
            </ul>
          </section>
        )}
        {activePage === 'farmers-markets' && (
          <section>
            <h2>Farmers markets</h2>
            <p>List of farmers markets here.</p>
          </section>
        )}
        {activePage === 'community-supported-agriculture-programs' && (
          <section>
            <h2>Community-supported agriculture programs</h2>
            <p>List of community-supported agriculture programs here.</p>
          </section>
        )}
        {activePage === 'local-food-co-ops' && (
          <section>
            <h2>Local food co-ops</h2>
            <p>List of local food co-ops here.</p>
          </section>
        )}
      </main>
      <footer id="footer1">
        <p>&copy; 2023 My Sustainable Food Company</p>
      </footer>
    </div>
  );
}

export default landing;
