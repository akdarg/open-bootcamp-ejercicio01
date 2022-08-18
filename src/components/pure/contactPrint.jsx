import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactPrint = ( {contact} ) => {
    
    const [estado, setconnected] = useState(contact.connected); 

    const changeState = () => {
        contact.connected = !(contact.connected)
        setconnected(contact.connected);
    }

    return (
        <div>
            <div>
                <h1>Contacto: </h1>
            </div>
            <div>
                <h3>Nombre: { contact.name } </h3>
                <h3>Apellido: { contact.lastname } </h3>
                <h3>Email: { contact.email } </h3>
                <h3>Estado: { estado ? 'Contacto En Línea' : 'Contacto No Disponible' }</h3>
            </div>
            <button onClick={changeState}>
                Cambiar estado
            </button>
        </div>
    );
};


ContactPrint.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactPrint;
