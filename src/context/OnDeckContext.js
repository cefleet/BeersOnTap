import React, {useState,createContext} from "react";
const OnDeckContext =  createContext();

function OnDeckContextProvider(props) {
    const [onDeck, setOnDeck] = useState(OnDeck);

    const removeOnDeckBeer = (id) => {
        setOnDeck([...onDeck.filter(bId=>bId !== id)]);
    }

    const addOnDeckBeer = (id) => {
        setOnDeck([...onDeck,id]);
    }

    const value = {removeOnDeckBeer,addOnDeckBeer,onDeck};

    return (
      <OnDeckContext.Provider value={value}>{props.children}</OnDeckContext.Provider>
    );
  }

export {OnDeckContext, OnDeckContextProvider};

const OnDeck = [1,3]