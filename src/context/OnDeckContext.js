import React, {useState,createContext, useEffect} from "react";
const OnDeckContext =  createContext();

function OnDeckContextProvider(props) {
    const [onDeck, setOnDeck] = useState([]);

    useEffect(() => {
      fetch('http://localhost:6789/onDeck')
          .then(function (response) {
              return response.json();
          })
          .then(function (res) {
              setOnDeck(res);
          });
  }, [])

  useEffect(() => {
    if (onDeck.length > 0) {
        fetch('http://localhost:6789/setOnDeck', {
            method: 'post',
            body: JSON.stringify(onDeck),
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
}, [onDeck])

    const removeOnDeckBeer = (id) => {
        setOnDeck([...onDeck.filter(bId=>bId !== id)]);
    }

    const addOnDeckBeer = (id) => {
        setOnDeck([...new Set([...onDeck,id])]);
    }

    const value = {removeOnDeckBeer,addOnDeckBeer,onDeck};

    return (
      <OnDeckContext.Provider value={value}>{props.children}</OnDeckContext.Provider>
    );
  }

export {OnDeckContext, OnDeckContextProvider};

//const OnDeck = [1,3]