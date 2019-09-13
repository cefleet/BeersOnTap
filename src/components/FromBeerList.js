import React, {useContext,useState, useEffect} from "react";
import {Box, TextInput} from "simplestyle";
import { BeersContext} from "../context/BeersContext";
import SelectableBeer from "./SelectableBeer";

const FromBeerList = ({onClick, maxHeight}) =>{
    const {beers} = useContext(BeersContext);
    const [filter,setFilter] = useState("");  
    const [filteredBeers,setFilteredBeers] = useState(beers);

    useEffect(()=>{
        if(filter ==="" || filter === null){
            setFilteredBeers(beers)
        } else {
            setFilteredBeers(beers.filter(b=>b.name.toLowerCase().includes(filter.toLowerCase()) || b.style.toLowerCase().includes(filter.toLowerCase()) || b.company.toLowerCase().includes(filter.toLowerCase())))
        }
    },[filter,beers])

    return(
        <Box maxHeight={maxHeight ? maxHeight : "300px"} overflowY="scroll">
            <TextInput placeholder="Filter By Name,Company,Style" onChange={(evt)=>setFilter(evt.target.value)} name="filterForBeer" />
            {filteredBeers.map(b=><SelectableBeer key={b.id} beer={b} onClick={onClick}/>)}
        </Box>
    )
}

export default FromBeerList;