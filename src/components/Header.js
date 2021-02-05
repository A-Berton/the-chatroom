import React,{useState} from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Heading} from 'react-bulma-components';
import { FaCogs, FaUser, FaBell } from 'react-icons/fa';
import Profil from "./Profil";

export default function Header (){

    const [popup, setPopup]= useState(false);

    const profil = {
        "nom": "Perret",
        "prenom": "Marcial",
        "mail" : "perret.martial@chatroom.com",
        "mot de passe": "*********"
    }

    const handleClick = (e) =>{
        setPopup(!popup);
    }

    return(
        <div>
            <Navbar className="is-fixed-top">
                <Navbar.Burger />
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <Heading className="has-text-info" subtitle size={4}>
                            The Chatroom
                        </Heading>
                    </Navbar.Item>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Container position="end">
                        <Navbar.Item href="#">
                            <p className="has-text-grey is-size-5">You are Chatting with <strong>John Smith</strong></p>
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            <FaUser className="has-text-info" onClick={handleClick} size="30px"/>
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            <FaCogs className="has-text-info" size="30px"/>
                        </Navbar.Item>
                        <Navbar.Item href="#">
                            <FaBell className="has-text-info" size="30px"/>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
            {popup ? 
                <Profil
                nom={profil["nom"]}
                prenom={profil["prenom"]}
                mail={profil["mail"]}
                popup={popup}
                closePopup={handleClick}
                />
                : null
            }
        </div>
    )
}

