import React, { useState, createContext, useEffect } from "react";
import Store from "../Store";
const OnDeckContext = createContext();

function OnDeckContextProvider(props) {
    const [onDeck, setOnDeck] = useState([]);
    const { updateItems, getItems } = Store();

    useEffect(() => {
        getItems("onDeck", (res) => {
            setOnDeck(res);
        });
    }, [])

    useEffect(() => {
        if (onDeck.length > 0) {
            updateItems("setOnDeck", onDeck, (res) => { console.log(res) });
        }
    }, [onDeck])

    const removeOnDeckBeer = (id) => {
        setOnDeck([...onDeck.filter(bId => bId !== id)]);
    }

    const addOnDeckBeer = (id) => {
        setOnDeck([...new Set([...onDeck, id])]);
    }

    const value = { removeOnDeckBeer, addOnDeckBeer, onDeck };

    return (
        <OnDeckContext.Provider value={value}>{props.children}</OnDeckContext.Provider>
    );
}

export { OnDeckContext, OnDeckContextProvider };

//const OnDeck = [1,3]