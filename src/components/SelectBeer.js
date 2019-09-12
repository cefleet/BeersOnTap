import React, {useContext,useState} from "react";
import {Box, Text, FilteredDropdown} from "simplestyle";
import { BeersContext} from "../context/BeersContext";
import {TapsContext} from "../context/TapsContext";
import {OnDeckContext} from "../context/OnDeckContext";

import AddNewBeer from "./AddNewBeer"; 

const SelectBeer = ({tapId})=>{
    const {beers} = useContext(BeersContext);
    const {onDeck, removeOnDeckBeer} = useContext(OnDeckContext);
    const {updateTap} = useContext(TapsContext);

    const [selectingBy, setSelectingBy] = useState(null);

    const addBeerFromOnDeck = (beerId) =>{
        removeOnDeckBeer(beerId);
        updateTap(tapId, {beer:beerId, date: new Date()});
    }

    const addBeerFromList = (evt) =>{
        updateTap(tapId, {beer:Number(evt.target.value), date: new Date()});
    }

    const OnDeckBeer = ({beerId})=>{
        let beer = beers.filter(b=>b.id === beerId)[0];

        return (
            <Box onClick={() => addBeerFromOnDeck(beer.id)} padding="4px" margin="2px" border="1px solid #ccc">{beer.name} - {beer.company} | {beer.style}</Box>
        )
    }

    let beerOptions = beers.map(b=>({Name:`${b.name} - ${b.company} | ${b.style}`,id:b.id}));

    return (
        <Box>
            <Box padding="6px" margin="2px" border="1px solid #efefef">
                <Text onClick={()=>setSelectingBy(selectingBy === "onDeck"? null : "onDeck")}>From On Deck</Text>                
                {selectingBy === "onDeck" && 
                    onDeck.map(b=><OnDeckBeer key={b} beerId={b} />)
                }
            </Box>
            <Box padding="6px" margin="2px" border="1px solid #efefef">
                <Text onClick={()=>setSelectingBy(selectingBy === "fromList"? null : "fromList")}>From List</Text>
                {selectingBy === "fromList" && 
                    <FilteredDropdown onChange={addBeerFromList} options={beerOptions} emptyText="Pick A Beer" placeholder="Filter Results by name,style,company" />
                }
            </Box>
            <Box padding="6px" margin="2px" border="1px solid #efefef">
                <Text onClick={()=>setSelectingBy(selectingBy === "addNew"? null : "addNew")}>Add New Beer</Text> 
                {selectingBy === "addNew" && <AddNewBeer tapId={tapId} />}               
            </Box>
        </Box>
    )
}

export default SelectBeer;