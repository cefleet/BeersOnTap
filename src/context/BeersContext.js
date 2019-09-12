import React, {useState,createContext} from "react";
const BeersContext =  createContext();

function BeersContextProvider(props) {
    const [beers, setBeers] = useState(Beers);
    const [nextId,setNextId] = useState(beers.sort((a,b)=>a.id-b.id)[beers.length-1].id+1);

    const removeBeer = (id) => {
        setBeers([...beers.filter(t=>t.id !== id)].sort((a,b)=>a.id > b.id));
    }

    const addBeer = (beer) => {
        setBeers([...beers, beer].sort((a,b)=>a.id > b.id));
        setNextId(nextId+1);
        return(nextId-1);
    }

    const updateBeer = (id,update) =>{
        setBeers([...beers.filter(t=>t.id !== id), {...beers.filter(t=>t.id === id)[0],...update}].sort((a,b)=>a.id - b.id));
    }

    const value = {removeBeer,addBeer,beers, updateBeer};

    return (
      <BeersContext.Provider value={value}>{props.children}</BeersContext.Provider>
    );
  }

export {BeersContext, BeersContextProvider};

const Beers = [
  {
    name:"420",
    company:"Sweetwater",
    city:"Atlanta",
    state:"GA",
    style:"EPA",
    abv:"6.3",
    price:"7",
    id:0
  },{
    name:"Going Costal",
    company:"Sweetwater",
    city:"Atlanta",
    state:"GA",
    style:"IPA",
    abv:"6.5",
    price:"7",
    id:1
  },{
    name:"Emergency Drinking Beer",
    company:"Wild Heaven",
    city:"Atlanta",
    state:"GA",
    style:"Pale Ale",
    abv:"5.5",
    price:"7",
    id:2
  },{
    name:"Stone IPA",
    company:"Stone",
    city:"West (somewhere)",
    state:"West",
    style:"IPA",
    abv:"6.3",
    price:"7",
    id:3
  }
]
