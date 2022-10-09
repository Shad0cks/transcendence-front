import React from 'react';
import Home  from './Pages/HomePage/Home';
import ListeParty from './Pages/HomePage/ListeParty';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Home/>
      <ListeParty/>
    </div>
  )
}

export default App;