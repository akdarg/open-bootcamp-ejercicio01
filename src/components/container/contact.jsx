import React from 'react';
import { Contact } from '../../models/contact.class'
import ContactPrint from '../pure/contactPrint';


const ContactComponent = () => {

    const defaultContact = new Contact ('Nombre1', 'Apellido1', 'email1@mail.com', true);

    return (
        <div>
            <ContactPrint contact={defaultContact}></ContactPrint>
        </div>
    );
};

export default ContactComponent;
