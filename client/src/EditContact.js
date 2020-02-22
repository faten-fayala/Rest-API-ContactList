import React, { Component } from "react";
import { connect } from "react-redux";
import { editcontact } from "./Actions/contactAction";

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
   componentDidMount  () {
    this.setState(
      this.props.contacts.contact.filter(el => el._id === this.props.match.params.id)[0])
    
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 


  render() {
    return (
      <div className="add_contact_modal">
        <h1 className="title">EDIT CONTACT</h1>
        <div  className="modal_items">
        <div className="modal_items_attribut">
         
          <label className="items">Name:</label>
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="modal_items_attribut">
          <label className="items">Phone:</label>
          <input
            type="name"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="modal_items_attribut">
          <label className="items">Email:</label>
          <input
            type="email"
            name="Email"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="modal_items_attribut">
        <button className="add_contact"
          onClick={() => {
            this.props.editcontact(this.state._id, {
              name: this.state.name,
              phone: this.state.phone,
              Email: this.state.Email
            });
            this.props.history.push('/get_contact')
          }}
        >
        
          Edit Contact
        </button>

        <button className="cancel_contact" onClick={() => this.props.history.goBack()}>
          Cancel Contact
        </button>
      </div>
      </div>
      </div>
    );
  }
}

        
const mapStateToProps = state => {
    return {
        contacts: state.ContactReducer
    }
  
};
export default connect(mapStateToProps, { editcontact })(EditContact);
