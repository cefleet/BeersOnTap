import React, {useState,createContext, useEffect} from "react";
const BeersContext =  createContext();

function BeersContextProvider(props) {
    const [beers, setBeers] = useState([]);
    const [nextId,setNextId] = useState(beers.length > 0 ? beers.sort((a,b)=>a.id-b.id)[beers.length-1].id+1 : 1);

    useEffect(() => {
      fetch('http://localhost:6789/beers')
          .then(function (response) {
              return response.json();
          })
          .then(function (res) {
              setBeers(res);
              setNextId(res.length > 0 ? res.sort((a, b) => a.id - b.id)[res.length - 1].id + 1 : 1);
          });
  }, [])

  useEffect(() => {
    if (beers.length > 0) {
        fetch('http://localhost:6789/setBeers', {
            method: 'post',
            body: JSON.stringify(beers),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        })
            .then(function (res) {
                //console.log(res);
            });
    }
}, [beers])
    const removeBeer = (id) => {
        setBeers([...beers.filter(t=>t.id !== id)].sort((a,b)=>a.id > b.id));
    }

    const addBeer = (beer) => {
        setBeers([...beers, {...beer,id:nextId}].sort((a,b)=>a.id > b.id));
        setNextId(nextId+1);
        return(nextId);
    }

    const updateBeer = (id,update) =>{
        console.log(update);
        setBeers([...beers.filter(t=>t.id !== id), {...beers.filter(t=>t.id === id)[0],...update}].sort((a,b)=>a.id - b.id));
    }

    const value = {removeBeer,addBeer,beers, updateBeer};

    return (
      <BeersContext.Provider value={value}>{props.children}</BeersContext.Provider>
    );
  }

export {BeersContext, BeersContextProvider};

/*
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
]*/
