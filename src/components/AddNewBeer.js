import React, {useContext, useState} from "react";
import { BeersContext} from "../context/BeersContext";
import {TapsContext} from "../context/TapsContext";
import {Box, TextInput, Button} from "simplestyle";

const AddNewBeer = ({tapId}) =>{
    const [form,setForm] = useState({});
    const {addBeer} = useContext(BeersContext);
    const {updateTap} = useContext(TapsContext);

    const updateForm = (evt) =>{
        setForm({...form, [evt.target.name]:evt.target.value})
    }

    const saveBeer = () =>{
        console.log(tapId);
        let id = addBeer(form);
        if(tapId){
            updateTap(tapId,{beer:id});
        }
    }

    return(
        <Box>
            <TextInput label="Name" name="name" onChange={updateForm}/>
            <TextInput label="Company" name="company" onChange={updateForm}/>
            <TextInput label="Style" name="style" onChange={updateForm}/>
            <TextInput label="City" name="city" onChange={updateForm}/>
            <TextInput label="State" name="state" onChange={updateForm}/>
            <TextInput label="abv" name="abv" onChange={updateForm}/>
            <TextInput label="price" name="price" onChange={updateForm}/>
            <Button label="Add Beer" onClick={saveBeer}/>
        </Box>
    )

};

export default AddNewBeer;