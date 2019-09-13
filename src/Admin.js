import React, { useState } from 'react';
import { MainBox} from "simplestyle";
import Menu from "./components/Menu";

import OnTap from "./layouts/OnTap";
import OnDeck from "./layouts/OnDeck";
import Beers from "./layouts/Beers";
import './reset.css';

const Admin = () => {
  
    const [view, setView] = useState("OnTap");
  
    return (
      <MainBox layout="mobile">
        <Menu onChosen={setView} selected={view} />
        {view === "OnTap" &&
          <OnTap />
        }
        {view ==="OnDeck" &&
          <OnDeck />
        }
        {view === "Beers" &&
          <Beers />
        }
      </MainBox>
    )
  }
  
  export default Admin;