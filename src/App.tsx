import React from 'react';
import Header  from './Pages/HomePage/Header';
import ListeParty from './Pages/HomePage/ListeParty';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import PartyCreate from './Pages/HomePage/partyCreate';

function App() {
  return (
    <div>
      <Header/>
      <PartyCreate/>
      <ListeParty/>
    </div>
  )
}

export default App;