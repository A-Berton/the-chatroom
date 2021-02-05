import React, {useState, useEffect}from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Media, Image, Content} from 'react-bulma-components';
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
        <Columns.Column size={3} className="mtop mleft" id="contactlist">
            {
                data && data.results.map((user, index) => 
                <Media>
                    <Media.Item renderAs="figure" position="left">
                        <Image rounded size={64} alt="64x64" src={user.picture.thumbnail}/>
                    </Media.Item>
                    <Columns.Column className="is-vcentered">
                        <Media.Item>
                            <Content>
                                <div className="is-size-4">
                                    <p key={index}>{user.name.first} {user.name.last}</p>
                                </div>
                            </Content>
                        </Media.Item>
                    </Columns.Column>    
                </Media>
            )}
        </Columns.Column>
    )
}
