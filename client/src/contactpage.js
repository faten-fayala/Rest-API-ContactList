import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom'

const ContactPage =()=>{

  return (
    <div className="contact_list_app" >
     <h1 className="title">CONTACT LIST APP</h1>

      <Link to='/get_contact'><button className="contact_list">CONTACTS LIST</button></Link>
      <Link to="/new_contact"><button className="contact_list">ADD NEW CONTACT</button></Link>
    </div>


  );
};


export default  ContactPage;