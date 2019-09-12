import React, {useState, useContext, useEffect} from "react";
import {Box,Button} from "simplestyle";
import SelectBeer from "./SelectBeer";
import { BeersContext} from "../context/BeersContext";
import {TapsContext} from "../context/TapsContext";

const TappedBeer = ({id, tapId})=>{

    const {beers} = useContext(BeersContext);
    const [beer,setBeer] = useState(beers.filter(b=>b.id === id)[0]);
    const {updateTap} = useContext(TapsContext);

    useEffect(()=>{
        setBeer(beers.filter(b=>b.id === id)[0]);
        setSettingBeer(false);

    },[id,beers])

    const [settingBeer,setSettingBeer] = useState(false);

    const removeBeerFromTap = (evt) =>{
        updateTap(tapId, {beer:null, date:null});
    }

    if(settingBeer){
        return (<SelectBeer tapId={tapId} />)
    }
    
    if(beer){
        return(
            <Box display="flex" alignItems="flex-start" wrap="nowrap" justifyContent="flex-start" >
                <Box onClick={()=>setSettingBeer(true)} border="1px solid">{beer.company} - {beer.name} | {beer.style} | {beer.city}, {beer.state} \ {beer.abv}% abv - ${beer.price}</Box>
                <Button label={"x"} background={"red"} padding="2px 6px" margin="0 10px" fontSize="16px" onClick={() => removeBeerFromTap(tapId)} />
            </Box>
        )
    } 
    
    return(<Button label={"Add Beer To Tap"} onClick={()=>setSettingBeer(true)} />)
    
}
export default TappedBeer;