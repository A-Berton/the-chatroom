import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default function Profil(props){

    const active = props.popup ? "is-active" : "";

    return(
        <div className={`modal ${active}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Profil</p>
                <button className="delete" onClick={props.closePopup} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt=""/>
                            </figure>
                        </div>
                        <div className="media-right">
                            <p>nom: {props.nom}</p>
                            <p>prénom: {props.prenom}</p>
                            <p>email: {props.mail}</p>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>
    )
}