import React, { useContext, useState } from "react";

import { TapsContext } from "./context/TapsContext";
import { BeersContext } from "./context/BeersContext";
import { OnDeckContext } from "./context/OnDeckContext";
import { Box, FlexBox } from "simplestyle";

import { Item } from "./components/SelectableBeer";
import { flavorImg, logoImg } from "./config";

const Beer = ({ beer, fontSize, color }) => {

    if (beer) {
        return (
            <FlexBox fontSize={fontSize} color={color}>
                <Item width="280px">{beer.name}</Item>
                <Item width="200px">{beer.company}</Item>
                <Item width="120px">{beer.style}</Item>
                <Item width="180px">{beer.city}, {beer.state}</Item>
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
            <Box>
                <Box fontSize="34px" borderBottom="1px solid">On Tap: </Box>
                {taps.map(t => <Beer key={t.id} beer={beers.filter(b => b.id === t.beer)[0]} fontSize="22px" />)}
                <Box margin="16px 0"></Box>
                <Box color="yellow" fontSize="34px" borderBottom="1px solid">On Deck: </Box>
                {onDeck.map(d => <Beer key={d} beer={beers.filter(b => b.id === d)[0]} color="yellow" fontSize="22px" />)}
            </Box>
            <FlexBox>
                <img height="150px" src={logoImg} />
                <img height="150px" src={flavorImg} />
            </FlexBox>
        </Box>
    )
};

export default Present;