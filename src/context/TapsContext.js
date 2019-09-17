import React, { useState, createContext, useEffect } from "react";
import Store from "../Store";

const TapsContext = createContext();

function TapsContextProvider(props) {
    const [taps, setTaps] = useState([]);
    const [nextId, setNextId] = useState(taps.length > 0 ? taps.sort((a, b) => a.id - b.id)[taps.length - 1].id + 1 : 1);
    const [init,setInit] = useState(true);

    const { updateItems, getItems } = Store();

    useEffect(() => {
        getItems("taps", (res) => {
            setTaps(res);
            setNextId(res.length > 0 ? res.sort((a, b) => a.id - b.id)[res.length - 1].id + 1 : 1);
        });
    }, [])

    useEffect(() => {
        if(init){
            setInit(false);
            return;
        }
        if (taps.length > 0 && props.view === "admin") {
            updateItems("setTaps", taps, (res) => { console.log(res) });
        }
        
    }, [taps])

    const removeTap = (id) => {
        setTaps([...taps.filter(t => t.id !== id)].sort((a, b) => a.id > b.id));
    }

    const addTap = () => {
        setTaps([...taps, { name: `Tap ${taps.length + 1}`, id: nextId }].sort((a, b) => a.id > b.id));
        setNextId(nextId + 1);
    }

    const updateTap = (id, update) => {
        console.log(update);
        setTaps([...taps.filter(t => t.id !== id), { ...taps.filter(t => t.id === id)[0], ...update }].sort((a, b) => a.id - b.id));
    }

    const value = { removeTap, addTap, taps, updateTap };

    return (
        <TapsContext.Provider value={value}>{props.children}</TapsContext.Provider>
    );
}

export { TapsContext, TapsContextProvider };