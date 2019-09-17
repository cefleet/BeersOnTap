import React, { useState, createContext, useEffect } from "react";
import Store from "../Store";
const BeersContext = createContext();

function BeersContextProvider(props) {
  const [beers, setBeers] = useState([]);
  const [nextId, setNextId] = useState(beers.length > 0 ? beers.sort((a, b) => a.id - b.id)[beers.length - 1].id + 1 : 1);
  const { updateItems, getItems } = Store();
  const [init,setInit] = useState(true);

  useEffect(() => {
    getItems("beers", (res) => {
      setBeers(res);
      setNextId(res.length > 0 ? res.sort((a, b) => a.id - b.id)[res.length - 1].id + 1 : 1);
    });
  }, [])

  useEffect(() => {
    if (init) {
      setInit(false);
      return;
    }
    if (beers.length > 0 && props.view === "admin") {
      updateItems("setBeers", beers, (res) => { console.log(res) });
    }
  }, [beers])

  const removeBeer = (id) => {
    setBeers([...beers.filter(t => t.id !== id)].sort((a, b) => a.id > b.id));
  }

  const addBeer = (beer) => {
    setBeers([...beers, { ...beer, id: nextId }].sort((a, b) => a.id > b.id));
    setNextId(nextId + 1);
    return (nextId);
  }

  const updateBeer = (id, update) => {
    setBeers([...beers.filter(t => t.id !== id), { ...beers.filter(t => t.id === id)[0], ...update }].sort((a, b) => a.id - b.id));
  }

  const value = { removeBeer, addBeer, beers, updateBeer };

  return (
    <BeersContext.Provider value={value}>{props.children}</BeersContext.Provider>
  );
}

export { BeersContext, BeersContextProvider };