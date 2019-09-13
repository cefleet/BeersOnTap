import React, {useState, useContext, useEffect} from "react";
import {Box,Button, FlexBox} from "simplestyle";
import SelectBeer from "./SelectBeer";
import { BeersContext} from "../context/BeersContext";
import {TapsContext} from "../context/TapsContext";
import SelectableBeer from "./SelectableBeer";

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
        return (
        <Box>
            <SelectBeer tapId={tapId}  />
            <Button label={"Cancel"} onClick={() => setSettingBeer(false)} />
        </Box>
        )
    }
    
    if(beer){
        return(
            <FlexBox >
                <SelectableBeer beer={beer} onClick={()=>setSettingBeer(true)} />
                <Button label={"x"} background={"red"} onClick={() => removeBeerFromTap(tapId)} />
            </FlexBox>
        )
    } 
    
    return(<Box><Button label={"Add Beer To Tap"} onClick={()=>setSettingBeer(true)} /></Box>)
    
}
export default TappedBeer;