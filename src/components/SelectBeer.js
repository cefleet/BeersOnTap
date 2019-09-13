import React, {useContext,useState} from "react";
import {Box, Text} from "simplestyle";
import { BeersContext} from "../context/BeersContext";
import {TapsContext} from "../context/TapsContext";
import {OnDeckContext} from "../context/OnDeckContext";

import AddNewBeer from "./AddNewBeer"; 
import FromBeerList from "./FromBeerList";
import SelectableBeer from "./SelectableBeer";

const SelectBeer = ({tapId, goingOnDeck})=>{
    console.log(tapId);
    const {beers} = useContext(BeersContext);
    const {onDeck, removeOnDeckBeer, addOnDeckBeer} = useContext(OnDeckContext);
    const {updateTap} = useContext(TapsContext);

    const [selectingBy, setSelectingBy] = useState(null);

    const addBeerFromOnDeck = (beer) =>{
        removeOnDeckBeer(beer.id);
        if(tapId){
            updateTap(tapId, {beer:beer.id, date: new Date()});
        } 
    }

    const addBeerFromList = (beer) =>{
        if(tapId){
            updateTap(tapId, {beer:beer.id, date: new Date()});
        } else if(goingOnDeck){
            addOnDeckBeer(beer.id);
        }
    }

    return (
        <Box>
            {!goingOnDeck &&
            <Box cursor="pointer" border="1px solid #efefef" onClick={()=>setSelectingBy("onDeck")}>
                <Text >From On Deck</Text>                
                {selectingBy === "onDeck" && 
                    onDeck.map(b=><SelectableBeer key={b} beer={beers.filter(beer=>beer.id === b)[0]} onClick={addBeerFromOnDeck}/>)
                }
            </Box>
            }
            <Box  cursor="pointer" border="1px solid #efefef"  onClick={()=>setSelectingBy("fromList")}>
                <Text>From List</Text>
                {selectingBy === "fromList" && 
                <FromBeerList onClick={addBeerFromList} />
                }
            </Box>
            <Box  cursor="pointer" border="1px solid #efefef" onClick={()=>setSelectingBy("addNew")}>
                <Text>Add New Beer</Text> 
                {selectingBy === "addNew" && <AddNewBeer tapId={tapId} goingOnDeck={goingOnDeck} />}               
            </Box>
        </Box>
    )
}

export default SelectBeer;