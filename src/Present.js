import React, { useContext } from "react";

import { TapsContext } from "./context/TapsContext";
import { BeersContext } from "./context/BeersContext";
import { OnDeckContext } from "./context/OnDeckContext";
import { Box,FlexBox } from "simplestyle";

import { Item } from "./components/SelectableBeer";

const Beer = ({beer, fontSize}) => {
    if(beer){
    return (
        <FlexBox fontSize={fontSize}> 
            <Item width="300px">{beer.name}</Item>
            <Item width="200px">{beer.company}</Item>
            <Item width="120px">{beer.style}</Item>
            <Item width="160px">{beer.city}, {beer.state}</Item>
            <Item width="120px"> {beer.abv}% abv</Item>
            <Item width="50px">${beer.price}</Item>
        </FlexBox>)
    } return <></>
}

const Present = () => {
    const { taps } = useContext(TapsContext);
    const { beers } = useContext(BeersContext);
    const { onDeck } = useContext(OnDeckContext);

    return (
        <Box width="100%" height="100vh" padding="0" margin="0" backgroundColor="#000" color="#fff" overflow="hidden">
            <FlexBox>
                <Box>
                    <Box fontSize="34px" borderBottom="1px solid">On Tap: </Box>
                    {taps.map(t=><Beer key={t.id} beer={beers.filter(b=>b.id === t.beer)[0]} fontSize="26px" />)}
                    <Box margin="16px 0"></Box>
                    <Box fontSize="28px" borderBottom="1px solid">On Deck: </Box>
                    {onDeck.map(d=><Beer key={d} beer={beers.filter(b=>b.id === d)[0]} />)}
                </Box>
                <Box width="200px" textAlign="right">
                    <img width="200px" src="/images/logo.png" />
                    <img width="200px" src="/images/sarge.png" />
                </Box>
            </FlexBox>
        </Box>
    )
};

export default Present;