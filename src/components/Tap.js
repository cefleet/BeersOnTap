import React, { useState, useContext } from "react";
import TappedBeer from "./TappedBeer";
import { Box, TextInput, Button } from "simplestyle";

import { TapsContext } from "../context/TapsContext";

const Tap = ({ id, beerId }) => {
    const { removeTap, updateTap, taps } = useContext(TapsContext);
    const tap = taps.filter(t => t.id === id)[0];
    
    const [name, setName] = useState(tap.name);
    const [changeName, setChangeName] = useState(false);

    const saveName = () => {
        updateTap(tap.id, { name: name });
        setChangeName(false);
    }

    return (
        <Box border="1px solid" padding="6px">
            <Box display="flex" alignItems="flex-start" wrap="nowrap" justifyContent="flex-start" padding="3px 2px 10px" margin="2px 6px" borderBottom="1px solid">
                <Button label={"x"} background={"red"} padding="2px 6px" margin="0 10px" fontSize="16px" onClick={() => removeTap(tap.id)} />
                {!changeName &&
                    <Box padding="0" margin="0" onClick={() => setChangeName(true)}>Tap : {name}</Box>
                }
                {changeName &&
                    <Box padding="0" margin="0" display="flex" wrap="nowrap"  alignItems="flex-start">
                        <TextInput padding="0" onChange={(evt) => setName(evt.target.value)} placeholder={name} value={name} name={`tapId${tap.id}`} />
                        <Button padding="2px" label="save" onClick={saveName} />
                    </Box>
                }
            </Box>
            <TappedBeer id={tap.beer} tapId={tap.id} />
        </Box>);
}
export default Tap;