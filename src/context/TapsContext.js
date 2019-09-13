import React, { useState, createContext, useEffect } from "react";
const TapsContext = createContext();

function TapsContextProvider(props) {
    const [taps, setTaps] = useState([]);
    const [nextId, setNextId] = useState(taps.length > 0 ? taps.sort((a, b) => a.id - b.id)[taps.length - 1].id + 1 : 1);

    useEffect(() => {
        fetch('http://localhost:6789/taps')
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                setTaps(res);
                setNextId(res.length > 0 ? res.sort((a, b) => a.id - b.id)[res.length - 1].id + 1 : 1);
            });
    }, [])


    useEffect(() => {
        if (taps.length > 0) {
            fetch('http://localhost:6789/setTaps', {
                method: 'post',
                body: JSON.stringify(taps),
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

/*
const Taps = [
    { name: "IPA West coastin", id: 0, beer: 1, setDate: new Date() },
    { name: "Blond Ale", id: 1 },
    { name: "Stouter", id: 2 },
    { name: "This thing", id: 3 },
    { name: "A good one", id: 4, beer: 2, setDate: new Date() }

]*/