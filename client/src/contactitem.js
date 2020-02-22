import React from 'react';
import { connect } from 'react-redux';
import {deletecontact} from "./Actions/contactAction";
import { Link } from 'react-router-dom';

const ContactItem = (props) => {
    return (
        <div className="contact_item">
            <p  className="contact_items">Name: {props.contact.name}</p>
            <p className="contact_items">Phone: {props.contact.phone}</p>
            <p className="contact_items">Email: {props.contact.Email}</p> 
            <Link to={`/update_contact/${props.contact._id}`}> <button className="edit_contact" >Edit</button> </Link>
            <button className="delete_contact" onClick={()=> {props.deletecontact(props.contact._id)}} >Delete</button>

        </div>
    )
} 

export default connect(null,{deletecontact}) (ContactItem);

