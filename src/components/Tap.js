import React, { useState, useContext } from "react";
import TappedBeer from "./TappedBeer";
import { Box, TextInput, Button, FlexBox } from "simplestyle";

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
        <Box border="1px solid #ccc" >
            <FlexBox>
                <Button label={"x"} background={"red"} onClick={() => removeTap(tap.id)} />
                {!changeName &&
                    <Box onClick={() => setChangeName(true)}>{name}</Box>
                }
                {changeName &&
                    <FlexBox>
                        <TextInput onChange={(evt) => setName(evt.target.value)} placeholder={name} value={name} name={`tapId${tap.id}`} />
                        <Button label="save" onClick={saveName} />
                    </FlexBox>
                }
            </FlexBox>
            <TappedBeer id={tap.beer} tapId={tap.id} />
        </Box>);
}
export default Tap;