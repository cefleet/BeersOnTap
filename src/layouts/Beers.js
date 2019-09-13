import React, { useState } from "react";
import { HeaderItem, FlexBox, Button, Box } from "simplestyle";

import FromBeerList from "../components/FromBeerList";
import AddNewBeer from "../components/AddNewBeer";

const OnDeck = () => {
    const [addingBeer, setAddingBeer] = useState(false);
    const [beer, setBeer] = useState(false);

    return (<>
        <HeaderItem>Beers</HeaderItem>
        {beer && !addingBeer &&
            <Box>
                <AddNewBeer beer={beer} onSave={() => setBeer(null)} />
                <Button label="Cancel" onClick={() => setBeer(null)} />
            </Box>
        }
        {addingBeer && !beer &&
            <Box>
                <AddNewBeer onSave={() => setAddingBeer(false)} />
                <Button label="Cancel" onClick={() => setAddingBeer(false)} />
            </Box>
        }
        {!addingBeer && !beer &&
            <Box>
                <FlexBox>
                    <Button label="Add Beer" onClick={() => setAddingBeer(true)} />
                </FlexBox>
                <Box>
                    <FromBeerList onClick={setBeer} maxHeight="600px"/>
                </Box>
            </Box>
        }
    </>

    )
}

export default OnDeck;