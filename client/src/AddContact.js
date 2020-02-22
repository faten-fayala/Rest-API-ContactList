import React, { Component } from "react";

import { connect } from "react-redux";
import {addcontact} from './Actions/contactAction';
class AddContact extends Component {
  constructor(props) {
    super(props);
     this.state = { name: "", phone: "", Email: "" };
  }
  handleChange =e =>{
    this.setState({[e.target.name]: e.target.value})

  }
  render() {
    return (
      <div className="add_contact_modal">
         
          <h1 className="title">ADD NEW CONTACT</h1>
          <div className="modal_items">
          <div className="modal_items_attribut">
          <label className="items">Name:</label>
          <input type="name" placeholder="Enter your name" name="name" onChange={this.handleChange}></input>
        </div>
        
          <div className="modal_items_attribut" >
          <label className="items">Phone:</label>
          <input type="name" placeholder="Enter your phone" name="phone" onChange={this.handleChange}></input>
        </div>
        <div className="modal_items_attribut">
          <label className="items">Email:</label>
          <input type="email" placeholder="Enter your email" name="Email" onChange={this.handleChange}></input>
        </div>
        <div className="modal_items_attribut">
        <button className="add_contact" onClick={()=> {this.props.addcontact(this.state)
        // yemchi lel page getcontact
        this.props.history.push('/get_contact')}}> 
        
        Add Contact</button>
       
        <button className="cancel_contact" onClick={()=>this.props.history.goBack() }>Cancel Contact</button>
        </div>
        </div>
      </div>
    );
  }
}

export default(connect) (null,{addcontact}) (AddContact);
