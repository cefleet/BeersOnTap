import React, { useContext } from "react";
import { HeaderItem, FlexBox, Button, Box } from "simplestyle";
import Tap from "../components/Tap";
import { TapsContext } from "../context/TapsContext";

const OnTap = () => {
    const { taps, addTap } = useContext(TapsContext);

    return (
        <>
        <HeaderItem>Tap List</HeaderItem>
        <FlexBox>
            <Button label="Add Tap" onClick={addTap} />
        </FlexBox>
        <Box>
            {taps.map(t => <Tap key={t.id} id={t.id} beerId={t.beer} />)}
        </Box>
        </>
        )
}

export default OnTap;