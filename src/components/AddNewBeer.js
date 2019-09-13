import React, {useContext, useState} from "react";
import { BeersContext} from "../context/BeersContext";
import {TapsContext} from "../context/TapsContext";
import {Box, TextInput, Button} from "simplestyle";
import {OnDeckContext} from "../context/OnDeckContext";

const AddNewBeer = ({tapId, goingOnDeck, onSave, beer}) =>{

    const [form,setForm] = useState(beer || {});
    const {addBeer,updateBeer} = useContext(BeersContext);
    const {updateTap} = useContext(TapsContext);
    const {addOnDeckBeer} = useContext(OnDeckContext);

    const updateForm = (evt) =>{
        setForm({...form, [evt.target.name]:evt.target.value})
    }

    const saveBeer = () =>{
        let id;
        if(!form.id && String(form.id) !== "0"){
            id = addBeer(form);
        } else {
            id = beer.id;
            updateBeer(id, form);
        }

        if(tapId){
            updateTap(tapId,{beer:id});
        } else if(goingOnDeck){
            addOnDeckBeer(id);
        }

        if(onSave){
            onSave();
        }
    }

    return(
        <Box>
            <TextInput label="Name" name="name" onChange={updateForm} value={form.name || ""}/>
            <TextInput label="Company" name="company" onChange={updateForm} value={form.company || ""}/>
            <TextInput label="Style" name="style" onChange={updateForm} value={form.style || ""}/>
            <TextInput label="City" name="city" onChange={updateForm} value={form.city || ""}/>
            <TextInput label="State" name="state" onChange={updateForm} value={form.state || ""}/>
            <TextInput label="abv" name="abv" onChange={updateForm} value={form.abv || ""}/>
            <TextInput label="price" name="price" onChange={updateForm} value={form.price || ""}/>
            <Button label={`${beer ? "Update" : "Add"} Beer`} onClick={saveBeer}/>
        </Box>
    )

};

export default AddNewBeer;