import React from 'react';
import './styles/main.scss';

import {
  Header,
  HeaderDesc,
  ShorterLink,
  Services,
  Boost,
  Footer,
} from './components/layouts';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listing />} />
        </Routes>
      </Router> */}
      <Header />
      <HeaderDesc />
      <ShorterLink />
      <Services />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
