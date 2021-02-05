import React,{ createContext, useState, useContext } from "react";

export const StoreContext = createContext();

const initialMsgs = [];

function StoreProvider(props){
    const[msgs, setMsgs] = useState(initialMsgs);
    const[contacts,setContacts] = useState('');

    const add = (msg) =>{
        setMsgs([
            ...msgs, 
            {
                id: msgs.length,
                msg: msg
            }
        ]);
    }

    const addContact = (contact) =>{
        setContacts([
            ...contacts,
            {
                id: contacts.length,
                nom:contact.nom,
                prenom:contact.prenom,
                picture: contact.picture
            }
        ]);
    }

    const storeData = {msgs, contacts, add, addContact};

    return <StoreContext.Provider value={storeData} {...props} />;
}

function useStoreContext(){
    return useContext(StoreContext)
}

export {StoreProvider, useStoreContext};