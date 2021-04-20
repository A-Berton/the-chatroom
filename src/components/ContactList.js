import React, {useState, useEffect}from 'react';
import {  Grid, List, ListItemIcon, ListItemText, Avatar, Paper } from '@material-ui/core';
import axios from 'axios';
import {useStoreContext} from "../context/StoreContext";

export default function ContactList (){
    const [data, setData] = useState('');
    const storeContext = useStoreContext();

    const useFetch = () => {
        const url = 'https://randomuser.me/api/?results=10&inc=name,picture&nat=fr';
        
      
        // empty array as second argument equivalent to componentDidMount
        useEffect(() => {
            async function fetchData() {
                try {
                  const response = await axios.get(url);
                  const datas = response.data;
                  setData(datas);
                  contacts(data);
                } catch (error) {
                  console.error(error);
                }
              }
              fetchData();
            }, [url]);
      };
      useFetch();

      const contacts = (datas) =>{
          for(let item in data){
              storeContext.addContact({
                    picture : item.response.picture.thumbnail,
                    nom : item.response.name.last,
                    prenom: item.response.name.first
                    })
            }         
      }
                    
      //  data && data.results.map : data && test si data présente useEffect + async

    return(
        <Grid item xs={3} className="borderRight500 contactlist" overflow="visible">
        {
            data && data.results.map((user, index) => 
            <List>
                <ListItemIcon renderAs="figure" position="left">
                    <Avatar rounded size={64} alt="64x64" src={user.picture.thumbnail}/>
                </ListItemIcon>
                <ListItemText key={index} className="contacttext">
                        {user.name.first} {user.name.last}
                </ListItemText>
            </List>        
        )}
        </Grid>
    )
}
