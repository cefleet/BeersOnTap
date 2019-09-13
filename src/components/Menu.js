import React from "react";
import { FlexBox, Box } from "simplestyle";

const Menu = ({ onChosen, selected }) => {
    const MenuItem = (props) => (
        <Box
            position="relative"
            top="1px"
            fontSize="16px"
            fontWeight="bold"
            padding="10px"
            margin="0px"
            borderRight="1px solid"
            borderTop="1px solid" 
            borderBottom={`1px solid ${props.isActive ? "#fff" :""}`}
            cursor="pointer"
            onClick={props.onClick}
            >
            {props.children}
        </Box>)

    return (
        <FlexBox justifyContent="flex-start" borderLeft="1px solid" borderBottom="1px solid" margin="10px 0 0 0" padding="0">
            <MenuItem onClick={()=>onChosen("OnTap")} isActive={selected === "OnTap" ? true : false} >On Tap</MenuItem>
            <MenuItem onClick={()=>onChosen("OnDeck")} isActive={selected === "OnDeck" ? true : false}>On Deck</MenuItem>
            <MenuItem onClick={()=>onChosen("Beers")} isActive={selected === "Beers" ? true : false}>Beers</MenuItem>
        </FlexBox>
    )
}

export default Menu;