import React, { useContext } from 'react';
import { MainBox, Box, HeaderItem, Button } from "simplestyle";
import Tap from "./components/Tap";
import {TapsContext} from "./context/TapsContext";
const App = () => {

  const {taps,addTap} = useContext(TapsContext);

  return (
      <MainBox layout="mobile">
        <Button position="absolute" top="37px" fontSize="12px" label="Add Tap" onClick={addTap} />
        <HeaderItem>Tap List</HeaderItem>
        <Box>
          
          {
            taps.map(t => <Tap key={t.id} id={t.id} beerId={t.beer} />)
          }
        </Box>
      </MainBox>
  )
}

export default App;
