import React, { useContext, useState } from "react";
import { HeaderItem, FlexBox, Button, Box } from "simplestyle";
import { OnDeckContext } from "../context/OnDeckContext";
import { BeersContext } from "../context/BeersContext";

import SelectableBeer from "../components/SelectableBeer";
import SelectBeer from "../components/SelectBeer";

const OnDeck = () => {
    const [addingToOnDeck, setAddingToOnDeck] = useState(false);
    const { removeOnDeckBeer, onDeck } = useContext(OnDeckContext);
    const { beers } = useContext(BeersContext);

    return (<>
        <HeaderItem>On Deck</HeaderItem>
        <FlexBox>
            <Button label="Add To On Deck" onClick={() => setAddingToOnDeck(true)} />
        </FlexBox>
        {addingToOnDeck &&
            <Box>
                <SelectBeer goingOnDeck={true} />
                <Button label="Done" onClick={() => setAddingToOnDeck(false)} />
            </Box>
        }
        <Box>
            {onDeck.map(beerId => (
                <FlexBox key={beerId} >
                    <SelectableBeer beer={beers.filter(b => b.id === beerId)[0]} />
                    <Button label={"x"} background={"red"} onClick={() => removeOnDeckBeer(beerId)} />
                </FlexBox>
            )
            )}
        </Box>
    </>

    )
}

export default OnDeck;